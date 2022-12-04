import { readFile } from "fs/promises"
import { dirPath, ERROR_MSG } from "../utils.js";

const read = async () => {
    const filePath = `${(await dirPath(import.meta.url))}/files/fileToRead.txt`;

    try {
        const text = await readFile(filePath, 'utf-8');
        console.log(text);
    } catch (err) {
        throw new Error(ERROR_MSG);
    }
};

await read();