import { rename as _rename } from "fs/promises"
import { dirPath, ERROR_MSG } from "../utils.js";

const rename = async () => {
    const filePath = `${(await dirPath(import.meta.url))}/files/properFilename.md`;
    const wrongFilePath = `${(await dirPath(import.meta.url))}/files/wrongFilename.txt`;

    try {
        await _rename(wrongFilePath, filePath);
    } catch (err) {
        throw new Error(ERROR_MSG);
    }
};

await rename();