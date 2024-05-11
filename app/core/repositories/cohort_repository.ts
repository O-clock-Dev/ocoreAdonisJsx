import { ResultOf } from '#types/common'
import Cohort from '#core/models/cohort'

export type CohortListQueryResult = ResultOf<CohortRepository, 'all'>
export type CohortQueryResult = ResultOf<CohortRepository, 'find'>

export class CohortRepository {
  async all() {
    return await Cohort.query().preload('students').orderBy('start_date', 'asc').limit(50)
  }

  async find(id: string) {
    return await Cohort.query()
      .where('id', id)
      .preload('students', (query) => query.orderBy('firstName', 'asc'))
      .firstOrFail()
  }

  async select2All() {
    return await Cohort.query().select('id', 'name').orderBy('name', 'asc')
  }
}
