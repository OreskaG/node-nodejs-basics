const parseEnv = () => {
    const processArr = Object.entries(process.env)
    const result = processArr.filter((process) => process[0].startsWith('RSS_'))
                             .map(item => item.join('='))
                             .join('; ');
    console.log(result);
};

parseEnv();