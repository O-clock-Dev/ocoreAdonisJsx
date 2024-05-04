import { HttpContext } from '@adonisjs/core/http'
import { Dashboard } from '../../../resources/views/pages/dashboard.tsx'
import { inject } from '@adonisjs/core'

@inject()
export default class MainController {
  constructor() {}

  async index({}: HttpContext) {
    return <Dashboard />
  }
}
