import { App } from '../components/layouts/app.tsx'

export function Dashboard() {
  return (
    <App>
      <div class="crumble-menu crumble-menu--expanded">
        <h1>O'core</h1>
      </div>
      <main>
        <header>
          <h2>Welcome to Dashboard</h2>
        </header>
        <section class="main-full">
          <div>
            <h2>Formulaire de recherche</h2>
            <div class="crumble-card">
              <div class="crumble-no-course-card">
                <form action="" method="get">
                  <div class="form-group">
                    <label for="search">Taper le nom de la promo recherchée</label>
                    <input type="text" name="search" id="search" class="form-control" />
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
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </App>
  )
}
