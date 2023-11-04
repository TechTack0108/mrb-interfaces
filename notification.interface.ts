export default interface INotification {
	_id?: string;
	documentID: string;
	folderID: string;
	userID: string;
	message: string;
	hasRead: boolean;
}
