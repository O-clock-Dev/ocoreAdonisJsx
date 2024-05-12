import { route } from '#start/view'
import { HttpContext } from '@adonisjs/core/http'
import clsx from 'clsx'

export function Nav() {
  const { request } = HttpContext.getOrFail()

  const searchRoute = {
    name: 'Recherche',
    url: route('dashboard'),
    active: request.matchesRoute('dashboard') || request.matchesRoute('dashboard.results'),
  }

  const adminRoutes = [
    {
      name: 'Cours',
      url: route('admin.courses'),
      active: request.matchesRoute('admin.courses'),
    },
    {
      name: 'Promotions',
      url: route('admin.cohorts'),
      active: request.matchesRoute('admin.cohorts'),
    },
    {
      name: 'Utilisateurs',
      url: route('admin.students'),
      active: request.matchesRoute('admin.students'),
    },
  ]

  return (
    <>
      <h2 class="crumble-menu-title">Menu</h2>
      <nav role="navigation">
        <ul>
          <li>
            <a
              class={clsx('crumble-navlink crumble-navlink--large', searchRoute.active && 'active')}
              href={searchRoute.url}
            >
              <span class="crumble-navlink-content">
                <span class="crumble-icon" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.25rem"
                    height="1.25rem"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21.49,10.19l-1-.55h0l-9-5-.11,0a1.06,1.06,0,0,0-.19-.06l-.19,0-.18,0a1.17,1.17,0,0,0-.2.06l-.11,0-9,5a1,1,0,0,0,0,1.74L4,12.76V17.5a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V12.76l2-1.12V14.5a1,1,0,0,0,2,0V11.06A1,1,0,0,0,21.49,10.19ZM16,17.5a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V13.87l4.51,2.5.15.06.09,0a1,1,0,0,0,.25,0h0a1,1,0,0,0,.25,0l.09,0a.47.47,0,0,0,.15-.06L16,13.87Zm-5-3.14L4.06,10.5,11,6.64l6.94,3.86Z"></path>
                  </svg>
                </span>
                <span class="crumble-navlink-label">{searchRoute.name}</span>
              </span>
            </a>
          </li>
          <div class="crumble-subnav crumble-subnav--large">
            <button type="button" class="crumble-subnav-dropdown crumble-subnav-dropdown--large">
              <span class="crumble-icon" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.25rem"
                  height="1.25rem"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M8,17a1,1,0,1,0,1,1A1,1,0,0,0,8,17Zm0-6a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm8-9H8A4,4,0,0,0,4,6V18a4,4,0,0,0,4,4h8a4,4,0,0,0,4-4V6A4,4,0,0,0,16,2Zm2,16a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2V15.44A3.91,3.91,0,0,0,8,16h8a3.91,3.91,0,0,0,2-.56Zm0-6a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2V9.44A3.91,3.91,0,0,0,8,10h8a3.91,3.91,0,0,0,2-.56ZM16,8H8A2,2,0,0,1,8,4h8a2,2,0,0,1,0,4Z"></path>
                </svg>
              </span>
              <span class="crumble-subnav-dropdown-label">Administration</span>
              <span class="crumble-icon crumble-subnav-dropdown-arrow" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.25rem"
                  height="1.25rem"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"></path>
                </svg>
              </span>
            </button>
            <ul class="crumble-subnav-content crumble-subnav-content--open">
              {adminRoutes.map((route) => (
                <li>
                  <a
                    class={clsx('crumble-navlink crumble-navlink--large', route.active && 'active')}
                    href={route.url}
                    aria-current="page"
                  >
                    <span class="crumble-navlink-content">
                      <span class="crumble-navlink-label">{route.name}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </ul>
      </nav>
    </>
  )
}
