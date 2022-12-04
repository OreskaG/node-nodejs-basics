import { rename as _rename } from "fs/promises"
import { dirPath, ERROR_MSG } from "../utils.js";

const rename = async () => {
    const file = `${(await dirPath(import.meta.url))}/files/properFilename.md`;
    const fileWrong = `${(await dirPath(import.meta.url))}/files/wrongFilename.txt`;

    try {
        await _rename(fileWrong, file);
    } catch (err) {
        throw new Error(ERROR_MSG);
    }
};

await rename();