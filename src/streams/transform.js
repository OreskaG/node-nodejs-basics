import { Transform } from 'stream';
import { EOL } from 'os';

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            this.push(chunk.toString().split("").reverse().join("") + EOL);
            callback();
        },
    });
    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();