import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { Courses } from '../../../../resources/views/pages/courses.tsx'
import { CourseRepository } from '#core/repositories/course_repository'

@inject()
export default class AdminCoursesListController {
  constructor(private repository: CourseRepository) {}

  async list({}: HttpContext) {
    const courses = await this.repository.all()
    return <Courses courses={courses} />
  }
}
