import { fetchData } from './fetchData';
import { monthNames } from '../constant/monthNames';

async function processData() {
  try {
    // Fetch transaction data
    const transactionData = await fetchData();

    // Calculate monthly rewards data
    const monthlyRewardsData = transactionData.reduce((acc, val) => {
      // Create a new Date object once for reuse
      const purchaseDate = new Date(val.purchaseDate);
      const customerKey = `${val.customerId}_${purchaseDate.getMonth()}_${purchaseDate.getFullYear()}`;

      if (acc[customerKey]) {
        acc[customerKey].totalPrice += val.price;
      } else {
        acc[customerKey] = {
          customerName: val.customerName,
          customerId: val.customerId,
          totalPrice: val.price,
          transactionId: val.transactionId,
          purchaseMonth: monthNames[purchaseDate.getMonth()],
          purchaseYear: purchaseDate.getFullYear(),
          date: val.purchaseDate,
        };
      }
      return acc;
    }, {});

    // Convert the accumulator object to an array
    return Object.values(monthlyRewardsData);
  } catch (error) {
    throw new Error("Unable to fetch data: " + error.message);
  }
}

export default processData; 
