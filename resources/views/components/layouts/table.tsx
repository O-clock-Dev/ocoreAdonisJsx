import type { Children } from '@kitajs/html'

interface TableProps {
  thitems: { title: string; size: string }[]
  children: Children
}

export function Table(props: TableProps) {
  const { thitems, children } = props
  return (
    <div class="header-table">
      <div class="header-table-container">
        <div class="header-items">
          <button class="activated enabled css-h6kmeo header-item">Actifs</button>
        </div>
        <div class="header-buttons">
          <span></span>
        </div>
      </div>
      <table class="admin">
        <colgroup>
          {thitems.map((thitem) => {
            return <col style={{ width: thitem.size }} />
          })}
        </colgroup>
        <thead class="">
          <tr class="">
            <td colspan="10" class="thead-td-title">
              <div class="thead-flex">
                <div class="">
                  <span class="title">Cours</span>
                </div>
                <div class="crumble-tooltip-container">
                  <div class="search-input">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="css-yxn68l e1nbr7jo0"
                    >
                      <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z"></path>
                    </svg>
                    <input placeholder="Recherche" class="css-1vx00nm e1nbr7jo1" value="" />
                  </div>
                </div>
              </div>
            </td>
          </tr>
          <tr class="">
            {thitems.map((thitem) => {
              return (
                <th class="">
                  <div class="">
                    <span class="" style="cursor: pointer;">
                      <div class="crumble-tooltip-container">{thitem.title}</div>
                    </span>
                  </div>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody class="">{children}</tbody>
      </table>
    </div>
  )
}
