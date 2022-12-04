import { readdir } from "fs/promises"
import { dirPath, ERROR_MSG } from "../utils.js";

const list = async () => {
    const folderPath = `${(await dirPath(import.meta.url))}/files`;

    try {
        const filesInFolder = await readdir(folderPath);
        console.log(filesInFolder);
    } catch (err) {
        throw new Error(ERROR_MSG);
    }
};

await list();