import type { Children } from '@kitajs/html'
import { Vite } from '#resources/helpers/asset'

interface AppProps {
  children: Children
}

export function App(props: AppProps) {
  const { children } = props
  return (
    <html>
      <head>
        <title>Ma super app</title>
        <Vite.Entrypoint
          entrypoints={['resources/css/colors.css', 'resources/css/app.css', 'resources/js/app.js']}
        />
      </head>
      <body data-theme-mode="dark">
        <div id="root">{children}</div>
      </body>
    </html>
  )
}
