import { getFlashMessages } from '../../../helpers/flash_messages.ts'

export function FlashMessageError(props: { inputName: string }) {
  const { inputName } = props
  const flashMessages = getFlashMessages()

  const messages: string[] = []

  flashMessages.has(`inputErrorsBag.${inputName}`) &&
    flashMessages.get(`inputErrorsBag.${inputName}`).map((message: string) => {
      messages.push(message)
    })

  if (messages.length === 0) {
    return null
  }
  return (
    <div class={'flash-message error'}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="css-1ezgmol er67us02"
      >
        <path d="M12,14a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,14Zm0-1.5a1,1,0,0,0,1-1v-3a1,1,0,0,0-2,0v3A1,1,0,0,0,12,12.5ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"></path>
      </svg>
      <span>{messages[0]}</span>
    </div>
  )
}
