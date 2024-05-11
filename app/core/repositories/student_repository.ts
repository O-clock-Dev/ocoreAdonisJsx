import { ResultOf } from '#types/common'
import Student from '#core/models/student'

export type StudentListQueryResult = ResultOf<StudentRepository, 'all'>

export class StudentRepository {
  async all() {
    return await Student.query().preload('cohort').limit(50)
  }

  async findFirstOfCohort(cohortId: string) {
    return await Student.query()
      .where('cohort_id', cohortId)
      .orderBy('firstName', 'asc')
      .firstOrFail()
  }
}
