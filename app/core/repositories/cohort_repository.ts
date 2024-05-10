import { ResultOf } from '#types/common'
import Cohort from '#core/models/cohort'

export type CohortListQueryResult = ResultOf<CohortRepository, 'all'>

export class CohortRepository {
  async all() {
    return await Cohort.query().preload('students').orderBy('start_date', 'asc').limit(50)
  }

  async select2All() {
    return await Cohort.query().select('id', 'name').orderBy('name', 'asc')
  }
}
