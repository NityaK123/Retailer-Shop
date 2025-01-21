import logger from '../logger';

export const fetchData = async () => {
    try {
        // Fetch the JSON file from the public folder
        const responseData = await fetch("/data.json");

        if (!responseData.ok) {
            throw new Error("Failed to fetch data");
        }

        const response = await responseData.json();

        // Sort the transactions by purchase date
        const sortedTransaction = response.sort(
            (a, b) => new Date(a.purchaseDate) - new Date(b.purchaseDate),
        );
        return sortedTransaction;
    } catch (error) {
        logger.error(error.message);
    }
};
