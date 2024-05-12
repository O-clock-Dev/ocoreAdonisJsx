import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Cohort from '#core/models/cohort'

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
