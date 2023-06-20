export default interface IFolder {
  _id?: string;
  name: string;
  parentFolderID?: string | null;
  shareFolderID?: string | null;
  path_display?: string | null;
  isRootFolder?: boolean;
  numFiles: number;
}
