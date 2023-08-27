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

export enum DocumentFieldMongo {
	FIELD_ID = "$fieldId",
	SUBJECT = "$subject",
	REF_NO = "$refNo",
	PRE_REF_NO = "$preRefNo",
	SENDER = "$sender",
	RECEIVER = "$receiver",
	FOLDER_ID = "$folderId",
	FILE_PATH = "$filePath",
	RECEIVE_DATE = "$receiveDate",
	UPLOAD_DATE = "$uploadDate",
	FILE_NAME = "$fileName",
	FORMATTED_NAME = "$formattedName",
	RENAMED_FILE_NAME = "$renamedFileName",
	FILE_TYPE = "$fileType",
	DOCUMENT_TEXT = "$documentText",
	DOCUMENT_SIZE = "$documentSize",
	CLASSIFICATION_ID = "$classificationID",
	CATEGORY_ID = "$categoryID",
}
