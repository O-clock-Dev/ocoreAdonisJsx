import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { StudentRepository } from '#admin/repositories/student_repository'
import { Students } from '../../../../resources/views/pages/students.tsx'

@inject()
export default class AdminStudentsListController {
  constructor(private repository: StudentRepository) {}

  async list({}: HttpContext) {
    const students = await this.repository.all()
    return <Students students={students} />
  }
}
