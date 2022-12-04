import { cp } from "fs/promises"
import { dirPath, ERROR_MSG } from "../utils.js";

const copy = async () => {
    const folder = `${(await dirPath(import.meta.url))}/files`;
    const folderCopy = `${(await dirPath(import.meta.url))}/files_copy`;

    try {
        await cp(folder, folderCopy, {recursive: true, force: false, errorOnExist: true})
    } catch (err) {
        throw new Error(ERROR_MSG);
    }
};

await copy();
