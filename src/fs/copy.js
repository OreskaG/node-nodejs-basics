import { cp } from "fs/promises"
import { dirPath, ERROR_MSG } from "../utils.js";

const copy = async () => {
    const folderPath = `${(await dirPath(import.meta.url))}/files`;
    const folderCopyPath = `${(await dirPath(import.meta.url))}/files_copy`;

    try {
        await cp(folderPath, folderCopyPath, {recursive: true, force: false, errorOnExist: true})
    } catch (err) {
        throw new Error(ERROR_MSG);
    }
};

await copy();
