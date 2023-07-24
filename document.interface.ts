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
	/**
	 * The real name of the file, without the file extension.
	 * */
	formattedName?: string;
	/**
	 * Renamed file in the format of "receiveDate + refNo + subject".
	 * */
	renamedFileName?: string;
	fileType: string;
	documentText: string;
	documentSize: number;
	classificationID: string;
	categoryID: string;
}
