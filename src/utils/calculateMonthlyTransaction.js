import { monthNames } from "./constants";
import logger from "../logger";
import { calculateLastThreeMonthData } from "./rewardsHelper";
import { calculateRewardPoints } from "./rewardsHelper";

function serializeTransactions(transactionData) {
  try {
    // Validate transactionData if needed
    if (!Array.isArray(transactionData)) {
      throw new Error('Invalid transaction data format');
    }

    const monthlyRewardsData = transactionData.reduce((acc, val) => {
      const purchaseDate = new Date(val.purchaseDate);
      if (!purchaseDate.getTime()) {
        throw new Error(`Invalid purchase date: ${val.purchaseDate}`);
      }

      const customerKey = `${val.customerId}-${purchaseDate.getMonth() + 1}-${purchaseDate.getFullYear()}`;
      let transactionRewards = calculateRewardPoints(val.price);

      if (acc[customerKey]) {
        acc[customerKey].rewardsPoint += transactionRewards;
        acc[customerKey].totalPrice += val.price;
      } else {
        acc[customerKey] = {
          customerName: val.customerName,
          customerId: val.customerId,
          totalPrice: val.price,
          rewardsPoint: transactionRewards,
          transactionId: val.transactionId,
          purchaseMonth: monthNames[purchaseDate.getMonth()],
          purchaseYear: purchaseDate.getFullYear(),
          date: val.purchaseDate,
        };
      }
      return acc;
    }, {});

    const lastThreeMonthData = calculateLastThreeMonthData(Object.values(monthlyRewardsData));
    return lastThreeMonthData;

  } catch (error) {
    logger.error('Error in serializeTransactions:', error);
    throw error;
  }
}

export default serializeTransactions;
