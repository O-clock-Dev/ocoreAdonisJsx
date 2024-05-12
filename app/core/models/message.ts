import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import Cohort from '#core/models/cohort'
import Course from '#core/models/course'
import Student from '#core/models/student'

export default class Message extends BaseModel {
  static table = 'message'

  @column({ isPrimary: true })
  declare id: string

  @column()
  declare timestamp: string

  @column.dateTime({ columnName: 'timestampFromStartDate' })
  declare timestampFromStartDate: DateTime

  @column()
  declare message: string

  @column()
  declare course_id: string

  @column()
  declare student_id: string

  @column()
  declare cohort_id: string

  @belongsTo(() => Course, {
    foreignKey: 'course_id',
  })
  declare course: BelongsTo<typeof Course>

  @belongsTo(() => Student, {
    foreignKey: 'student_id',
  })
  declare student: BelongsTo<typeof Student>

  @belongsTo(() => Cohort, {
    foreignKey: 'cohort_id',
  })
  declare cohort: BelongsTo<typeof Cohort>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
}
