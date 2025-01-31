import logger from "../logger";
import { calculateRewardPoints } from "./rewardsHelper";

function serializeTotalRewards(transactionData) {
  try {
    // Validate transaction data to ensure required fields are present
    if (!Array.isArray(transactionData)) {
      throw new Error('Invalid transaction data format');
    }

    // Calculate total rewards data
    const totalRewards = transactionData.reduce((acc, val) => {
      // Ensure necessary fields are present
      if (!val.customerId || !val.price || !val.customerName || !val.transactionId) {
        throw new Error(`Missing required transaction fields for customerId: ${val.customerId}`);
      }

      let transactionRewards = calculateRewardPoints(val.price);

      if (!acc[val.customerId]) {
        acc[val.customerId] = {
          customerName: val.customerName,
          rewardsPoint: transactionRewards,
          customerId: val.customerId,
          totalPrice: val.price,
          transactionId: val.transactionId,
        };
      } else {
        acc[val.customerId].rewardsPoint += transactionRewards;
        acc[val.customerId].totalPrice += val.price;
      }

      return acc; // Return the accumulator
    }, {});

    // Convert the accumulator to an array at the end
    return Object.values(totalRewards);

  } catch (error) {
    // Log full error for better debugging
    logger.error('Error in serializeTotalRewards:', error);
    throw error; // Rethrow to handle errors appropriately in calling functions
  }
}

export default serializeTotalRewards;
