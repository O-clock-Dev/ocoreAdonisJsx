import { MessageCountQueryResult } from '#core/repositories/message_repository'
import router from '@adonisjs/core/services/router'

interface ChartProps {
  dataSql: MessageCountQueryResult
  startDate: string
  endDate: string
  cohortId: string
  studentId: string
}

export default function Chart(props: ChartProps) {
  const { dataSql, startDate, endDate, cohortId, studentId } = props

  // data for each date in the range of startDate and endDate
  const dates = []
  let currentDate = startDate
  while (currentDate <= endDate) {
    dates.push(currentDate)
    const tmpCurrentDate = new Date(currentDate)
    tmpCurrentDate.setDate(tmpCurrentDate.getDate() + 1)
    currentDate = tmpCurrentDate.toISOString().split('T')[0]
  }

  const data = dates.map((date) => {
    const itemFound = dataSql.find((item) => item.timestampFromStartDate.toISODate() === date)
    const url = router.makeUrl('dashboard.results', {
      cohortId: cohortId,
      startDate: startDate,
      endDate: endDate,
      currentDate: date,
      studentId: studentId,
    })
    return {
      date: date,
      messages: itemFound ? itemFound.$extras.messagesCount : 0,
      url: url,
      start: 0,
      end: 0,
    }
  })

  // messages data for each date in the range
  let maxMessages = 100
  // find max messages
  data.forEach((item) => {
    if (item.messages > maxMessages) {
      maxMessages = item.messages
    }
  })

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
          <table class="charts-css area hide-data show-data-axes show-4-secondary-axes">
            <tbody>
              {data.map((item) => (
                <tr>
                  <th scope="row">{new Date(item.date)}</th>
                  <td style={{ '--start': `${item.start}`, '--end': `${item.end}` } as any}>
                    <span class="data"> {item.messages} </span>
                    <span class="tooltip">
                      {item.messages} Messages <br />
                      {item.messages > 0 && (
                        <a href={item.url} class="badge badge-tooltip">
                          {new Date(item.date).toLocaleDateString()}
                        </a>
                      )}
                    </span>
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
