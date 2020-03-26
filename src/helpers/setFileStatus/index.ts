import { SaveFileOutput } from "../../helpers/saveFile";

export type SavedFile = string;
export interface UnsavedFile {
  fileName: string;
  error: NodeJS.ErrnoException;
}

const setFileStatus = (savedFiles: SavedFile[], unsavedFiles: UnsavedFile[], saveAction: SaveFileOutput, fileName: string) => {
  // If the action is successful, add that file to the 'saved' list
  // If it fails, add it to the 'unsaved' list with the error thrown.
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