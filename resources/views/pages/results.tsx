import { CohortQueryResult } from '#app/core/repositories/cohort_repository'
import clsx from 'clsx'
import { App } from '../components/layouts/app.tsx'
import { Nav } from '../components/layouts/nav.tsx'
import { Profile } from '../components/layouts/profile.tsx'
import router from '@adonisjs/core/services/router'
import { MessageListQueryResult } from '#app/core/repositories/message_repository'
import Chart from '../components/single/chart.tsx'

interface ResultsProps {
  cohort: CohortQueryResult
  startDate: string
  endDate: string
  currentDate: string
  studentId: string
  messages: MessageListQueryResult
}

export function Results(props: ResultsProps) {
  const { cohort, startDate, endDate, currentDate, studentId, messages } = props

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
          <h2>
            Résultats
            <span class="badge">nom de la promotion : {cohort.name}</span>
            <span class="badge">date de début : {startDate}</span>
            <span class="badge">date de fin : {endDate}</span>
            <span class="badge badge-warning">date courante : {currentDate}</span>
          </h2>
        </header>
        <section class="main-fullwidth">
          <div class="results">
            <ul>
              {cohort.students.map((student) => {
                // construct URL with cohortId, startDate, endDate, currentDate, studentId
                const url = router.makeUrl('dashboard.results', {
                  cohortId: cohort.id,
                  startDate: startDate,
                  endDate: endDate,
                  currentDate: currentDate,
                  studentId: student.id,
                })
                return (
                  <a
                    href={url}
                    class={clsx('badge badge-block', student.id === studentId ? 'active' : '')}
                  >
                    {student.firstName} {student.lastName}
                  </a>
                )
              })}
            </ul>
          </div>
          <div class="messages">
            <Chart />
            <h3>{messages?.length} messages</h3>
            {messages.map((message) => (
              <div class="message">
                <div class="message-header">
                  <span class="message-date">
                    {message.timestampFromStartDate.toFormat('dd/MM/yyyy HH:mm:ss')}
                  </span>
                </div>
                <div class="message-content">{message.message}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </App>
  )
}
