import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Cohort from './cohort.ts'

export default class Course extends BaseModel {
  static table = 'course'

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare name: string

  @column()
  declare meetingId: string

  @column()
  declare reportId: string

  @column()
  declare dashboardUrl: string

  @column()
  declare replayUrl: string

  @column()
  declare cohort_id: string

  @column.dateTime()
  declare creation_date: DateTime

  @column.dateTime()
  declare end_date: DateTime

  @belongsTo(() => Cohort, {
    foreignKey: 'cohort_id',
  })
  declare cohort: BelongsTo<typeof Cohort>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
}
