import { createWriteStream, createReadStream } from "fs"
import { createGzip } from "zlib";
import { dirPath } from "../utils.js";

const compress = async () => {
    const readStream = createReadStream(`${(await dirPath(import.meta.url))}/files/fileToCompress.txt`);
    const writeStream = createWriteStream(`${(await dirPath(import.meta.url))}/files/archive.gz`);
    const zip = createGzip();

    readStream.pipe(zip).pipe(writeStream);
};

await compress();