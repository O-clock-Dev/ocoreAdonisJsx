import { CohortListQueryResult } from '#core/repositories/cohort_repository'
import { App } from '../components/layouts/app.tsx'
import { Nav } from '../components/layouts/nav.tsx'
import { Profile } from '../components/layouts/profile.tsx'
import { Select2 } from '../components/single/select2.tsx'

interface DashboardProps {
  cohorts: CohortListQueryResult
}

export function Dashboard(props: DashboardProps) {
  const { cohorts } = props
  const options: { value: string; label: string }[] = []
  cohorts.map((cohort) => {
    options.push({ value: cohort.id.toString(), label: cohort.name })
  })

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
                    <Select2 options={options} />
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
