interface Data {
    message: string;
}

const fetchData = (url: string, callback: (data: Data) => void): void => {
    setTimeout(() => {
        const data: Data = { message: `Data from ${url}` };
        callback(data);
    }, 1000);
};


export { fetchData, Data };