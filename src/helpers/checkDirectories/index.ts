import fs from 'fs';
import { projectRoot } from "../../index";

const checkDirectories = (location: string) => {
  // Split the provided location into pieces
  const directories = location.split('/');
  // Directory to start checking at
  // This will be appended with each loop
  let currentDirectory = `${projectRoot}files`;
  // Loop through directory pieces
  directories.forEach(dir => {
    // If the directory doesn't exist, create it
    if (!fs.existsSync(`${currentDirectory}/${dir}`)) {
      fs.mkdirSync(`${currentDirectory}/${dir}`);
    }
    // Add the directory to the currentDirectory for the next loop
    currentDirectory += `/${dir}`;
  });
}

export default checkDirectories;