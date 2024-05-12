import { Html } from '@kitajs/html'
import clsx from 'clsx'
import { route } from '#start/view'
import { CohortListQueryResult } from '#core/repositories/cohort_repository'
import { csrfField } from '#resources/helpers/csrf_field'
import { getFlashMessages } from '#resources/helpers/flash_messages'
import { App } from '#views/components/layouts/app'
import { FlashMessageError } from '#views/components/single/flash_message_error'
import { Nav } from '#views/components/layouts/nav'
import { Profile } from '#views/components/layouts/profile'
import { Select2 } from '#views/components/single/select2'

interface DashboardProps {
  cohorts: CohortListQueryResult
}

export function Dashboard(props: DashboardProps) {
  const flashMessages = getFlashMessages()
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
                <form action={route('dashboard')} method="post">
                  <div class="form-group">
                    <label for="search">Taper le nom de la promo recherchée</label>
                    <Select2 options={options} />
                    <FlashMessageError inputName="cohort_id" />
                  </div>
                  <div class="form-group-divided">
                    <div class="form-group">
                      <label for="search">Date de début</label>
                      <input
                        type="date"
                        name="start_date"
                        id="start_date"
                        class={clsx(
                          'form-control',
                          flashMessages.has('inputErrorsBag.start_date') ? 'is-error' : ''
                        )}
                        value={flashMessages.get('start_date') || ''}
                      />
                      <FlashMessageError inputName="start_date" />
                    </div>
                    <div class="form-group">
                      <label for="search">Date de fin</label>
                      <input
                        type="date"
                        name="end_date"
                        id="end_date"
                        class={clsx(
                          'form-control',
                          flashMessages.has('inputErrorsBag.end_date') ? 'is-error' : ''
                        )}
                        value={flashMessages.get('end_date') || ''}
                      />
                      <FlashMessageError inputName="end_date" />
                    </div>
                  </div>
                  {csrfField()}
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
