export default interface IDocument {
  _id?: string;
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
  documentText: string;
  documentSize: number;
  classificationID: string;
  categoryID: string;
}
