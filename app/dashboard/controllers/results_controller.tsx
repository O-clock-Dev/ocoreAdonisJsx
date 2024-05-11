import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { Results } from '../../../resources/views/pages/results.tsx'
import { CohortRepository } from '#app/core/repositories/cohort_repository'
import { MessageRepository } from '#app/core/repositories/message_repository'

@inject()
export default class ResultsController {
  constructor(
    private repository: CohortRepository,
    private messageRepository: MessageRepository
  ) {}

  async index({ request }: HttpContext) {
    const { cohortId, startDate, endDate, currentDate, studentId } = request.params()

    // currentDate format is 'YYYY-MM-DD', so we can use it directly
    const currentDateTimestamp = new Date(currentDate)
    const tomorrowDateTimestamp = new Date(currentDate + 'T23:59:59.999Z')

    const cohort = await this.repository.find(cohortId)
    const messages = await this.messageRepository.allFromStudentIdAndDate(
      studentId,
      cohortId,
      currentDateTimestamp,
      tomorrowDateTimestamp
    )

    return (
      <Results
        cohort={cohort}
        startDate={startDate}
        endDate={endDate}
        currentDate={currentDate}
        studentId={studentId}
        messages={messages}
      />
    )
  }
}
