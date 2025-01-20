import React, { useState, useEffect } from 'react'
import RetailerShop from '../components/MonthlyReward';
import TransactionDetails from '../components/Transaction';
import TotalReward from '../components/TotalReward';

const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

function Home() {

    const [rewardsData, setRewardsData] = useState([]);
    const [totalRewardsData, setTotalRewardsData] = useState([]);
    const [transactionsData, setTransactionsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        const fetchData = async () => {
            setIsLoading(true)
            try {
                // Fetch the JSON file from the public folder
                const responseData = await fetch('/api.json');

                if (!responseData.ok) {
                    throw new Error('Failed to fetch data');
                }

                const response = await responseData.json();

                const sortedTransaction = response.sort((a, b) => new Date(a.purchaseDate) - new Date(b.purchaseDate))
                setTransactionsData(sortedTransaction)

                //Finding Monthly Rewards Data according to month wise
                const monthlyRewardsData = sortedTransaction.reduce((acc, val) => {
                    const customerKey = `${val.customerId}_${new Date(val.purchaseDate).getMonth()}_${new Date(val.purchaseDate).getFullYear()}`;
                    if (acc[customerKey]) {
                        acc[customerKey].totalPrice += val.price;
                    } else {
                        acc[customerKey] = {
                            customerName: val.customerName,
                            customerId: val.customerId,
                            totalPrice: val.price,
                            transactionId: val.transactionId,
                            purchaseMonth: monthNames[new Date(val.purchaseDate).getMonth()],
                            purchaseYear: new Date(val.purchaseDate).getFullYear()
                        };
                    }
                    return acc;
                }, {});
                setRewardsData(Object.values(monthlyRewardsData))

                //Finding Total Price/Rewards According to and customer_id
                const totalRewards = sortedTransaction.reduce((acc, val) => {
                    if (acc[val.customerId]) {
                        acc[val.customerId].totalPrice += val.price;
                    } else {
                        acc[val.customerId] = {
                            customerName: val.customerName,
                            customerId: val.customerId,
                            totalPrice: val.price,
                            transactionId: val.transactionId
                        };
                    }
                    return acc;
                }, {});
                setTotalRewardsData(Object.values(totalRewards))
            }
            //Handle Error
            catch (error) {
                setError("Unable to fetch data,Kindly Wait!")
            }

            //Set isLoding to false when data is loaded
            finally {
                setIsLoading(false)
            }
        }
        fetchData();  // Call the async function
    }, [])           // Empty dependency array means this runs only once, similar to componentDidMount 

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;


    return (
        <div className="App">
            <TransactionDetails data={transactionsData} />
            <RetailerShop data={rewardsData} />
            <TotalReward data={totalRewardsData} />
        </div>
    );
}

export default Home;