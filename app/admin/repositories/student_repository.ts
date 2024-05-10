import { ResultOf } from '#types/common'
import Student from '#admin/models/student'

export type StudentListQueryResult = ResultOf<StudentRepository, 'all'>

export class StudentRepository {
  async all() {
    return await Student.query()
      .preload('cohort')
      //.orderBy('firstName', 'asc')
      //.orderBy('lastName', 'asc')
      .limit(50)
  }
}
