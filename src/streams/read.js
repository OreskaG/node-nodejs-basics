import { createReadStream } from "fs"
import { dirPath } from "../utils.js";

const read = async () => {
    createReadStream(`${(await dirPath(import.meta.url))}/files/fileToRead.txt`).pipe(process.stdout);
};

await read();