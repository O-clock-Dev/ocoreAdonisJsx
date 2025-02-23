import { DateTime } from 'luxon'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Student from '#core/models/student'

export default class Cohort extends BaseModel {
  static table = 'cohort'

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column()
  declare slug: string

  @column.dateTime()
  declare start_date: DateTime

  @column.dateTime()
  declare end_date: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @hasMany(() => Student, {
    foreignKey: 'cohort_id',
  })
  declare students: HasMany<typeof Student>
}
