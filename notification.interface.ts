export default interface INotification {
  _id?: string;
  documentID: string;
  userID: string;
  message: string;
  hasRead: boolean;
}
