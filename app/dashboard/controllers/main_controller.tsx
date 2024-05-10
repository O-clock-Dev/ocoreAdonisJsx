import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { Dashboard } from '../../../resources/views/pages/dashboard.tsx'
import { CohortRepository } from '#app/core/repositories/cohort_repository'

@inject()
export default class MainController {
  constructor(private repository: CohortRepository) {}

  async index({}: HttpContext) {
    const cohorts = await this.repository.select2All()
    return <Dashboard cohorts={cohorts} />
  }
}
