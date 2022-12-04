import { rm } from "fs/promises"
import { dirPath, ERROR_MSG } from "../utils.js";

const remove = async () => {
    const filePath = `${(await dirPath(import.meta.url))}/files/fileToRemove.txt`;

    try {
        await rm(filePath);
    } catch (err) {
        throw new Error(ERROR_MSG);
    }
};

await remove();