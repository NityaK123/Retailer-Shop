import React, { useState, useEffect } from "react";
import MonthlyReward from "../components/MonthlyReward";
import TransactionDetails from "../components/Transaction";
import TotalReward from "../components/TotalReward";
import { calculateLastThreeMonthData } from "../utils/latestThreeMonthData";
import { fetchData } from "../services/fetchData";
import processData from "../services/calculateMonthlyRewards";
import processTotalRewards from "../services/calculateTotalRewards";
import logger from "../logger";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Home() {
  const [monthlyRewardsData, setMonthlyRewardsData] = useState([]);
  const [totalRewardsData, setTotalRewardsData] = useState([]);
  const [transactionsData, setTransactionsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const shopData = async () => {
      setIsLoading(true);
      try {
        const responseData = await fetchData();
        setTransactionsData(responseData);

        const monthlyRewardData = await processData();
        const threeMonthData = calculateLastThreeMonthData(monthlyRewardData);
        setMonthlyRewardsData(threeMonthData);

        const totalRewardData = await processTotalRewards();
        setTotalRewardsData(totalRewardData);
      } catch (error) {
        logger.error(error.message);
        setError("Unable to fetch data,Kindly Wait!" + error.message);
      } finally {
        setIsLoading(false);
      }
    };
    shopData();
  }, [])

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="App">
      <h1>Customer Transaction and Rewards Point</h1>
      <div className="card-container">
        <div className="card">
          <Tabs
            defaultActiveKey="allTransaction"
            id="justify-tab-example"
            variant="tabs"
            className="mb-3"
            justify
          >
            <Tab eventKey="allTransaction" title="All Transaction">
              <TransactionDetails data={transactionsData} />
            </Tab>
            <Tab eventKey="monthlyData" title="Monthly Rewards(Last three Month)">
              <MonthlyReward data={monthlyRewardsData} />
            </Tab>
            <Tab eventKey="totalRewards" title="Total Rewards">
              <TotalReward data={totalRewardsData} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Home;
