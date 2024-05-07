import { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { Dashboard } from '../../../resources/views/pages/dashboard.tsx'

@inject()
export default class MainController {
  constructor() {}

  async index({}: HttpContext) {
    return <Dashboard />
  }
}
