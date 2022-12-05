const parseArgs = () => {
    const args = process.argv.slice(2);
    let result = '';
    args.forEach((arg, index) => {
        if(arg.startsWith('--') && !args[index + 1].startsWith('--')){
            result += `${arg.slice(2)} is ${args[index + 1]}`;
            if(index !== args.length - 1 && index !== args.length - 2) {
                result += ', ';
            }
        }
    });
    console.log(result);
};

parseArgs();