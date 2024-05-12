import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { CohortRepository } from '#core/repositories/cohort_repository'
import { StudentRepository } from '#core/repositories/student_repository'
import { CreateSearchValidator } from '#dashboard/validators/search'
import { Dashboard } from '#views/pages/dashboard'

@inject()
export default class MainController {
  constructor(
    private cohortRepository: CohortRepository,
    private studentRepository: StudentRepository
  ) {}

  async index({}: HttpContext) {
    const cohorts = await this.cohortRepository.select2All()
    return <Dashboard cohorts={cohorts} />
  }

  async post({ request, response }: HttpContext) {
    const payload = await request.validateUsing(CreateSearchValidator)
    const currentDate = payload.start_date
    const firstStudent = await this.studentRepository.findFirstOfCohort(payload.cohort_id)

    response.redirect().toRoute('dashboard.results', {
      cohortId: payload.cohort_id,
      startDate: payload.start_date,
      endDate: payload.end_date,
      currentDate: currentDate,
      studentId: firstStudent.id,
    })
  }
}
