import { writeFile } from "fs/promises"
import { dirPath, ERROR_MSG } from "../utils.js";

const create = async () => {
  const folder = `${(await dirPath(import.meta.url))}/files/fresh.txt`;
  const text = 'I am fresh and young';
  try {
    await writeFile(folder, text, { flag: 'wx'});
  } catch (err) {
    throw new Error(ERROR_MSG);
  }
};

await create();