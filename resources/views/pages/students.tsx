import { StudentListQueryResult } from '#app/admin/repositories/student_repository'
import { App } from '../components/layouts/app.tsx'
import { Nav } from '../components/layouts/nav.tsx'
import { Profile } from '../components/layouts/profile.tsx'
import { Table } from '../components/layouts/table.tsx'

interface StudentsProps {
  students: StudentListQueryResult
}

export function Students(props: StudentsProps) {
  const { students } = props

  const thitems = [
    {
      title: 'Prénom',
      size: `${40}%`,
    },
    {
      title: 'Nom',
      size: `${20}%`,
    },
    {
      title: 'Github',
      size: `${20}%`,
    },
    {
      title: 'Nom de la promo',
      size: `${20}%`,
    },
    {
      title: '',
      size: '2%',
    },
  ]

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
          <h2>Etudiants enregistrés</h2>
        </header>
        <section class="main-fullwidth">
          <Table thitems={thitems}>
            <>
              {students.map((student) => (
                <tr class="">
                  <td class="">{student.firstName}</td>
                  <td class="">{student.lastName}</td>
                  <td class="">{student.github}</td>
                  <td class="">{student.cohort.name}</td>
                  <td class="">
                    <div class="crumble-tooltip-container">
                      <button type="button" class="" aria-haspopup="true" aria-expanded="false">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          class=""
                        >
                          <path d="M12,7a2,2,0,1,0-2-2A2,2,0,0,0,12,7Zm0,10a2,2,0,1,0,2,2A2,2,0,0,0,12,17Zm0-7a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </>
          </Table>
        </section>
      </main>
    </App>
  )
}
