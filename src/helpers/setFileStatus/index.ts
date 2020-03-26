import { SaveFileOutput } from "../../helpers/saveFile";

export type SavedFile = string;
export interface UnsavedFile {
  fileName: string;
  error: NodeJS.ErrnoException;
}

const setFileStatus = (savedFiles: SavedFile[], unsavedFiles: UnsavedFile[], saveAction: SaveFileOutput, fileName: string) => {
  if (saveAction === 'success') {
    savedFiles.push(fileName);
  } else {
    unsavedFiles.push({
      fileName,
      error: saveAction,
    });
  }
}

export default setFileStatus;