export const calculateLastThreeMonthData = (data) => {
    const today = new Date();
    // Get the date for 3 months ago
    const threeMonthsAgo = new Date(today);
    threeMonthsAgo.setMonth(today.getMonth() - 3);
    // Filter data to keep only the latest 3 months
    const filteredData = data.filter(item => {
        const itemDate = new Date(item.date);
        return itemDate >= threeMonthsAgo && itemDate <= today;
    });
    return filteredData
}