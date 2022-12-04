import { rm } from "fs/promises"
import { dirPath, ERROR_MSG } from "../utils.js";

const remove = async () => {
    const file = `${(await dirPath(import.meta.url))}/files/fileToRemove.txt`;

    try {
        await rm(file);
    } catch (err) {
        throw new Error(ERROR_MSG);
    }
};

await remove();