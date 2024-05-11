import { ResultOf } from '#types/common'
import Message from '#core/models/message'

export type MessageListQueryResult = ResultOf<MessageRepository, 'allFromStudentIdAndDate'>

export class MessageRepository {
  async allFromStudentIdAndDate(
    studentId: string,
    cohortId: string,
    date: Date,
    tomorrowDate: Date
  ) {
    const results = await Message.query()
      .where('student_id', studentId)
      .where('cohort_id', cohortId)
      .where('timestampFromStartDate', '>=', date)
      .where('timestampFromStartDate', '<=', tomorrowDate)
      .orderBy('timestampFromStartDate', 'asc')
    return results
  }
}
