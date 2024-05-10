import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { CohortRepository } from '#admin/repositories/cohort_repository'
import { Cohorts } from '../../../../resources/views/pages/cohorts.tsx'

@inject()
export default class AdminCohortsListController {
  constructor(private repository: CohortRepository) {}

  async list({}: HttpContext) {
    const cohorts = await this.repository.all()
    return <Cohorts cohorts={cohorts} />
  }
}
