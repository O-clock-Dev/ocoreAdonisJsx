import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Cohort from './cohort.ts'
import Course from './course.ts'
import Student from './student.ts'

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
