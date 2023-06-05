export default interface IReminder {
  _id?: string;
  documentID: string;
  userID: string;
  reminderDate: Date;
  message?: string;
}
