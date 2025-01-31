import logger from "../logger";
import { calculateRewardPoints } from "./rewardsHelper";

function serializeTotalRewards(transactionData) {
  try {
    
    // Calculate total rewards data
    const totalRewards = transactionData.reduce((acc, val) => {
      // If the customerId already exists, add the price to the totalPrice
      let transactionRewards = calculateRewardPoints(val.price)
      
      if (acc[val.customerId]) {
        acc[val.customerId].rewardsPoint += transactionRewards
        acc[val.customerId].totalPrice += val.price;
      } else {
        // If it's a new customerId, initialize their data
        acc[val.customerId] = {
          customerName: val.customerName,
          rewardsPoint:transactionRewards,
          customerId: val.customerId,
          totalPrice: val.price,
          transactionId: val.transactionId,
        };
      }
      return acc; // Return the accumulator as it is
    }, {});

    // Convert the accumulator to an array at the end
    return Object.values(totalRewards);
  } catch (error) {
    logger.error(error.message);
    throw error
  }
}

export default serializeTotalRewards;
