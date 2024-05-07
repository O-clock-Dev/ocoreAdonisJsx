import { ResultOf } from '#types/common'
import Course from '#admin/courses/models/course'

export type CourseListQueryResult = ResultOf<CourseRepository, 'all'>

export class CourseRepository {
  async all() {
    return await Course.query().preload('cohort').orderBy('creation_date', 'desc').limit(50)
  }
}
