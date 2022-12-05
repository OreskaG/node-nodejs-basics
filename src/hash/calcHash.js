import { createHash } from "crypto"
import { readFile } from "fs/promises";
import { dirPath } from "../utils.js";

const calculateHash = async () => {
    const text = await readFile(`${(await dirPath(import.meta.url))}/files/fileToCalculateHashFor.txt`);
    console.log(createHash('sha256').update(text).digest('hex'));
};

await calculateHash();