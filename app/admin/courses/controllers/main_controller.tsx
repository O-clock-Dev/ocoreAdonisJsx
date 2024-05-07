import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { Courses } from '../../../../resources/views/pages/courses.tsx'
import { CourseRepository } from '#admin/courses/repositories/course_repository'

@inject()
export default class MainController {
  constructor(private repository: CourseRepository) {}

  async index({}: HttpContext) {
    const courses = await this.repository.all()
    return <Courses courses={courses} />
  }
}
