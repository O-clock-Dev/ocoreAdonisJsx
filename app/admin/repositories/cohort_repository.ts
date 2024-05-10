import { ResultOf } from '#types/common'
import Cohort from '#admin/models/cohort'

export type CohortListQueryResult = ResultOf<CohortRepository, 'all'>

export class CohortRepository {
  async all() {
    return await Cohort.query().preload('students').orderBy('start_date', 'asc').limit(50)
  }
}
