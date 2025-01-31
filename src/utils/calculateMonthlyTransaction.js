import { monthNames } from "./constants";
import logger from "../logger";
import { calculateLastThreeMonthData } from "./rewardsHelper";
import { calculateRewardPoints } from "./rewardsHelper";

function serializeTransactions(transactionData) {
  try {

    // Calculate monthly rewards data
    const monthlyRewardsData = transactionData.reduce((acc, val) => {
      // Create a new Date object once for reuse
      const purchaseDate = new Date(val.purchaseDate);
      const customerKey = `${val.customerId}_${purchaseDate.getMonth()}_${purchaseDate.getFullYear()}`;
      let transactionRewards = calculateRewardPoints(val.price)
      
      if (acc[customerKey]) {
        acc[customerKey].rewardsPoint += transactionRewards
        acc[customerKey].totalPrice += val.price;
      } else {
        acc[customerKey] = {
          customerName: val.customerName,
          customerId: val.customerId,
          totalPrice: val.price,
          rewardsPoint:transactionRewards,
          transactionId: val.transactionId,
          purchaseMonth: monthNames[purchaseDate.getMonth()],
          purchaseYear: purchaseDate.getFullYear(),
          date: val.purchaseDate,
        };
      }
      return acc;
    }, {});

    // Convert the accumulator object to an array and calculating lastThreeMonthData
    const lastThreeMonthData = calculateLastThreeMonthData(Object.values(monthlyRewardsData))
    return lastThreeMonthData;
  } catch (error) {
    logger.error(error.message);
    throw error
  }
}

export default serializeTransactions;
