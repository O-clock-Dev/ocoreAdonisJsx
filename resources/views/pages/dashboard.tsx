import { App } from '../components/layouts/app.tsx'
import { Nav } from '../components/layouts/nav.tsx'
import { Profile } from '../components/layouts/profile.tsx'

export function Dashboard() {
  return (
    <App>
      <div class="crumble-menu crumble-menu--expanded">
        <div class="crumble-menu-logo">
          <h1>O'Core</h1>
        </div>
        <Profile />
        <Nav />
      </div>
      <main>
        <header>
          <h2>Dashboard</h2>
        </header>
        <section class="main-full">
          <div>
            <h2>Formulaire de recherche</h2>
            <div class="crumble-card">
              <div class="crumble-no-course-card">
                <form action="" method="get">
                  <div class="form-group">
                    <label for="search">Taper le nom de la promo recherchée</label>
                    <div class="select2-container">
                      <span
                        aria-live="polite"
                        aria-atomic="false"
                        aria-relevant="additions text"
                        class="select2-a11yText"
                      ></span>
                      <div class="select2-control">
                        <div class="select2-selector">
                          <div class="select2-singleValue">Râ</div>
                          <div class="select2-button">
                            <div class="" style="display: inline-block;">
                              <input
                                autocomplete="off"
                                id=""
                                spellcheck="false"
                                tabindex="0"
                                type="text"
                                aria-autocomplete="list"
                                value=""
                                style="box-sizing: content-box; width: 2px; background: 0px center; border: 0px; font-size: inherit; opacity: 0; outline: 0px; padding: 0px; color: inherit;"
                              />
                              <div style="position: absolute; top: 0px; left: 0px; visibility: hidden; height: 0px; overflow: scroll; white-space: pre; font-size: 14px; font-family: Arial; font-weight: 400; font-style: normal; letter-spacing: normal; text-transform: none;"></div>
                            </div>
                          </div>
                        </div>
                        <div class="">
                          <span class="indicatorSeparator"></span>
                          <div class="indicatorContainer" aria-hidden="true">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <input name="promotion" type="hidden" value="62b4d35ae7d423d28967eb18" />
                    </div>
                  </div>
                  <div class="form-group-divided">
                    <div class="form-group">
                      <label for="search">Date de début</label>
                      <input type="date" name="start_date" id="start_date" class="form-control" />
                    </div>
                    <div class="form-group">
                      <label for="search">Date de fin</label>
                      <input type="date" name="end_date" id="end_date" class="form-control" />
                    </div>
                  </div>
                  <div class="crumble-container">
                    <button
                      type="submit"
                      class="crumble-button crumble-button-primary crumble-button--is-full crumble-button-medium"
                    >
                      <span class="crumble-button-content">Lancer la recherche</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </App>
  )
}
