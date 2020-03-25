import fs from 'fs';
import { projectRoot } from "../../index";

const checkDirectories = (location: string) => {
  const directories = location.split('/');
  let currentDirectory = `${projectRoot}files`;
  directories.forEach(dir => {
    if (!fs.existsSync(`${currentDirectory}/${dir}`)) {
      fs.mkdirSync(`${currentDirectory}/${dir}`);
    }
    currentDirectory += `/${dir}`;
  });
}

export default checkDirectories;