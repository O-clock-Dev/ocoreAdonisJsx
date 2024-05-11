import vine, { SimpleMessagesProvider } from '@vinejs/vine'

const messages = {
  required: 'Le champs {{ field }} est requis',
  minLength: 'Le champs {{ field }} doit contenir au moins {{ min }} caractères',
  in: 'Le champs {{ field }} ne contient pas la bonne valeur',
  trim: 'Le champs {{ field }} doit être une chaîne de caractères',
}

const fields = {
  cohort_id: 'id de la promotion',
  start_date: 'date de début',
  end_date: 'date de fin',
}

/**
 * Validates the post's creation action
 */
const createSearchValidator = vine.compile(
  vine.object({
    cohort_id: vine.string().trim().minLength(6),
    start_date: vine.string().trim().minLength(6),
    end_date: vine.string().trim().minLength(6),
  })
)
createSearchValidator.messagesProvider = new SimpleMessagesProvider(messages, fields)
export { createSearchValidator }
