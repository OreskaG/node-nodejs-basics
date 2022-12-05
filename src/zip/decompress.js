import { createWriteStream, createReadStream } from "fs"
import { createGunzip } from "zlib";
import { dirPath } from "../utils.js";

const decompress = async () => {
    const readStream = createReadStream(`${(await dirPath(import.meta.url))}/files/archive.gz`);
    const writeStream = createWriteStream(`${(await dirPath(import.meta.url))}/files/fileToCompress.txt`);
    const unzip = createGunzip();

    readStream.pipe(unzip).pipe(writeStream);
};

await decompress();