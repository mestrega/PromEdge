import fs from 'fs';
import { Row } from '../../helpers/getDataFile/models';
import checkDirectories from '../../helpers/checkDirectories';
import { projectRoot } from '../../index';

const saveFile = (fileLocation: string, fileName: string, fileContents: Row): 'success' | NodeJS.ErrnoException => {
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