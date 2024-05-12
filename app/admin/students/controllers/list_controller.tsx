import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { StudentRepository } from '#core/repositories/student_repository'
import { Students } from '#views/pages/students'

@inject()
export default class AdminStudentsListController {
  constructor(private repository: StudentRepository) {}

  async list({}: HttpContext) {
    const students = await this.repository.all()
    return <Students students={students} />
  }
}
