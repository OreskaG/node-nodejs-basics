import { fork } from "child_process";
import { dirPath } from "../utils.js";

const spawnChildProcess = async (args) => {
    fork(`${(await dirPath(import.meta.url))}/files/script.js`, [...args]);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['foo', 'bar', 'baz']);