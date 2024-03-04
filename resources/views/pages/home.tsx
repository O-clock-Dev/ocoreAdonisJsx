import { App } from '../components/layouts/app.js'
import { getFlashMessages } from '../../helpers/flash_messages.ts'
import { DateTime } from 'luxon'

type Post = {
  id: number
  title: string
  content: string
  author: string
  status: string
  createdAt: DateTime
}
interface HomeProps {
  posts: Post[]
}

export function Home(props: { posts: posts }) {
  const flashMessages = getFlashMessages()
  return (
    <App>
      {flashMessages.has('notification') && (
        <div class={'flash-message ' + flashMessages.get('notification').type}>
          {flashMessages.get('notification').message}
        </div>
      )}
      <h1>Hello world !</h1>
      <p>Voici les derniers posts publiés sur notre site :</p>
      <table>
        <thead>
          <tr>
            <th>Titre</th>
            <th>Auteur</th>
            <th>Statut</th>
            <th>Date de création</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.posts.map((post) => {
            return (
              <tr>
                <td>{post.title}</td>
                <td>{post.author}</td>
                <td>{post.status}</td>
                <td>{post.createdAt.toFormat('dd/MM/yyyy')}</td>
                <td>
                  <a href={'/post/' + post.id}>Voir</a> |{' '}
                  <a href={'/post/' + post.id + '/edit'}>Modifier</a> |{' '}
                  <a href={'/post/' + post.id + '/delete'}>Supprimer</a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </App>
  )
}
