import { ResultOf } from '#types/common'
import Message from '#core/models/message'

export type MessageListQueryResult = ResultOf<MessageRepository, 'allFromStudentIdAndDate'>
export type MessageCountQueryResult = ResultOf<MessageRepository, 'countMessagesPerDay'>

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

  async countMessagesPerDay(studentId: string, cohortId: string, startDate: Date, endDate: Date) {
    // timestampFromStartDate is a column which is the complete date of the message
    // but we need to group by the date only, so we can count the messages per day
    const results = await Message.query()
      .count('id', 'messagesCount')
      .select('timestampFromStartDate')
      .where('student_id', studentId)
      .where('cohort_id', cohortId)
      .where('timestampFromStartDate', '>=', startDate)
      .where('timestampFromStartDate', '<=', endDate)
      .groupByRaw('DATE(timestampFromStartDate)')
      .orderBy('timestampFromStartDate', 'asc')
    return results
  }
}
