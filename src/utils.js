import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const dirPath = async (url) => {
  const FILE_PATH = fileURLToPath(url);
  const DIR_PATH = dirname(FILE_PATH);
  return DIR_PATH;
}

export const ERROR_MSG = 'FS operation failed';