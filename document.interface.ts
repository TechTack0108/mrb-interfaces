export default interface IDocument {
	fileId?: string;
	subject: string;
	refNo: string;
	preRefNo: string[];
	sender: string;
	receiver: string[];
	folderId: string;
	filePath?: string;
	receiveDate: string;
	uploadDate: string;
	fileName: string;
	formattedName?: string;
	fileType: string;
	documentText: string;
	documentSize: number;
	classificationID: string;
	categoryID: string;
}
