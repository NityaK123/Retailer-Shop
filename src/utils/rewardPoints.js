import logger from "../logger";

export const calculateRewardPoints = (totalPrice) => {
  // First, check if totalPrice is a valid number
  if (totalPrice && isNaN(totalPrice)) {
    logger.error(`Total Price is not a valid number: ${totalPrice}`);
    return 0; // Return 0 or another default value when the price is invalid
  }
  // If totalPrice is valid, proceed with the calculation
  totalPrice = Math.floor(totalPrice);

  let rewardsPoint =
    totalPrice > 100
      ? (totalPrice - 100) * 2 + 50
      : totalPrice > 50
      ? totalPrice - 50
      : 0;

  return rewardsPoint;
};
