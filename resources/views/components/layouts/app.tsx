import type { Children } from '@kitajs/html'
import { route } from '#start/view'

interface AppProps {
  children: Children
}

export function App(props: AppProps) {
  const { children } = props
  return (
    <html>
      <head>
        <title>Ma super app</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
        />
        <link rel={'stylesheet'} href={'/assets/css/app.css'} />
      </head>
      <body>
        <main class="container">
          <nav>
            <ul>
              <li>
                <a href={route('home')}>Liste des posts</a>
              </li>
              <li>
                <a href={route('about')}>Ajouter un post</a>
              </li>
            </ul>
          </nav>
          {children}
        </main>
      </body>
    </html>
  )
}
