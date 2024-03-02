import type { Children } from '@kitajs/html'

interface AppProps {
  children: Children
}

export function App(props: AppProps) {
  const { children } = props
  return (
    <html>
      <head>
        <title>Ma super app</title>
      </head>
      <body>{children}</body>
    </html>
  )
}
