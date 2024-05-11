export default function Chart() {
  // messages data for each date in the range
  const data = [
    { date: '2021-01-01', messages: 52, start: 0, end: 0 },
    { date: '2021-01-02', messages: 20, start: 0, end: 0 },
    { date: '2021-01-03', messages: 40, start: 0, end: 0 },
    { date: '2021-01-04', messages: 150, start: 0, end: 0 },
    { date: '2021-01-05', messages: 20, start: 0, end: 0 },
    { date: '2021-01-06', messages: 40, start: 0, end: 0 },
    { date: '2021-01-07', messages: 1, start: 0, end: 0 },
  ]

  const maxMessages = Math.max(...data.map((item) => item.messages))

  // calculate ratio for each date
  data.forEach((item, index) => {
    item.start = item.messages / maxMessages
    // calculate ratio for next date
    item.end = data[index + 1] ? data[index + 1].messages / maxMessages : item.start
  })

  // create chart

  return (
    <div class="chart chart-hidden">
      <div class="chart-header">
        <h3>Nombre de messages sur la saison</h3>
      </div>
      <div class="chart-body">
        <div class="chart-area">
          <table class="charts-css area hide-data show-labels show-data-axes show-4-secondary-axes">
            <caption> Area Example #1 </caption>{' '}
            <tbody>
              {data.map((item) => (
                <tr>
                  <th scope="row">{item.date}</th>
                  <td style={{ '--start': `${item.start}`, '--end': `${item.end}` }}>
                    <span class="data"> {item.messages} </span>
                    <span class="tooltip">{item.messages} Messages</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
