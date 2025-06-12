type DataResult = {
    message?: string;
}

const processData = (data: DataResult | null): string => {
    if (data && data.message) {
        return data.message.toUpperCase();
    }
    return "No data received";
};

export { processData, DataResult };