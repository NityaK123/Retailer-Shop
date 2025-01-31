import logger from "../logger";

export const calculateRewardPoints = (totalPrice) => {
  // First, check if totalPrice is a valid number
  if (isNaN(totalPrice)) {
    logger.error(`Total Price is not a valid number: ${totalPrice}`);
    return 0; // Return 0 or another default value when the price is invalid
  }
  // If totalPrice is valid, proceed with the calculation
  const roundedPrice = Math.floor(totalPrice); 

  let rewardsPoint = 0;

  rewardsPoint =
    roundedPrice > 100
      ? (roundedPrice - 100) * 2 + 50
      : roundedPrice > 50
        ? roundedPrice - 50
        : 0;

  return rewardsPoint;
};

export const calculateLastThreeMonthData = (data) => {
  const today = new Date();
  // Get the date for 3 months ago
  const threeMonthsAgo = new Date(today);
  threeMonthsAgo.setMonth(today.getMonth() - 3);
  // Filter data to keep only the latest 3 months
  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.date);
    return itemDate >= threeMonthsAgo && itemDate <= today;
  });
  return filteredData;
};
