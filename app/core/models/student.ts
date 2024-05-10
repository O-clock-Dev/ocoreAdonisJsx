import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Cohort from './cohort.ts'

export default class Student extends BaseModel {
  static table = 'student'

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare fullName: string

  @column({ columnName: 'lastName' })
  declare lastName: string

  @column({ columnName: 'firstName' })
  declare firstName: string

  @column()
  declare slug: string

  @column()
  declare github: string

  @column()
  declare email: string

  @column()
  declare exit: boolean

  @column()
  declare cohort_id: string

  @belongsTo(() => Cohort, {
    foreignKey: 'cohort_id',
  })
  declare cohort: BelongsTo<typeof Cohort>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
}
