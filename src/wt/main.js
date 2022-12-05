import { Worker } from "worker_threads";
import { cpus } from "os";
import { dirPath } from "../utils.js";

const performCalculations = async () => {
    let count = 10;

    const result = await Promise.allSettled(cpus().map(() => {
        return new Promise(async (res, rej) => {
            const worker = new Worker(`${(await dirPath(import.meta.url))}/worker.js`, { workerData: count++ });
            worker.on('message', res);
            worker.on('error', rej);
        })
    }));

    result.map(((data) => {
        data.status === 'fulfilled' ? data.status = 'resolved' : data.status = 'error';
        if (data.status === 'error') {
            data.value = null;
            delete data.reason;
        };
    }))

    console.log(result);
};

await performCalculations();