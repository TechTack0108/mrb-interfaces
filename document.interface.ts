export default interface IDocument {
	fileId?: string;
	subject: string;
	refNo: string;
	preRefNo: string;
	sender: string;
	receiver: string;
	folderId: string;
	filePath?: string;
	receiveDate: Date;
	uploadDate: Date;
	fileName: string;
	fileType: string;
	documentText: string;
	documentSize: number;
	classificationID: string;
	categoryID: string;
}
