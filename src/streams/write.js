import { createWriteStream } from "fs"
import { dirPath } from "../utils.js";

const write = async () => {
    process.stdin.pipe(createWriteStream(`${(await dirPath(import.meta.url))}/files/fileToWrite.txt`));
};

await write();