import fs from 'fs';
import { Row } from '../../helpers/getDataFile/models';
import checkDirectories from '../../helpers/checkDirectories';
import { projectRoot } from '../../index';

export type SaveFileOutput = 'success' | NodeJS.ErrnoException;

const saveFile = (fileLocation: string, fileName: string, fileContents: Row | Row[]): SaveFileOutput => {
  checkDirectories(fileLocation);
  try {
    fs.writeFileSync(`${projectRoot}files/${fileLocation}/${fileName}`, JSON.stringify(fileContents));
    return 'success';
  } catch (err) {
    console.log(err as  NodeJS.ErrnoException);
    return err;
  }
}

export default saveFile;