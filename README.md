# Retailer-Shop
This is retailer shop in which customer buy the product and shop give points and rewards.

Steps:
Create a Folder.
Execute npx create-react-app retailershop.
Create a component folder and Make a Transaction.jsx , MonthlyReward.jsx, TotalReward.jsx. 
Make utils Folder and in this folder make a api.js
Created a Raw Data.
In this file make a async function for fetching data.

Logic Part:
First we Fetch the All transaction details and sort it in assending order.
For Monthly Reward ,  I use reduce function and make key according to customerId,Month and date.
For Total Reward , I use reduce function and make key customerId for each transaction.
created a folder utils,In this folder made a file of rewardPoint.js and write a Reward calculation logic

Then Pass the props  all the component.


Folder Structure:

public/
|-- assets
|   |--monthlyRewardsTableOutput.png
|   |--testCaseResult.png
|   |--totalRewardsTableOutput.png 
|   |--transactionTableOutput.png
|  
|
|-- data.json
|-- index.html
|
src/
|-- components/
|   |-- MonthlyReward.jsx
|   |-- TotalReward.jsx
|   |-- Transactions.js
|
|--constants/
|  |-- monthNames.js
|
|--pages/
|   |--Home.jsx
|
|
|--tests
|   |--componentsTest
|        |--MonthlyReward.test.js
|        |--TotalReward.test.js
|        |--Transaction.test.js
|   |--functionsTest
|        |--RewardPoint.test.js
|
|-- utils/
|   |--services
|       |--getTransaction.js
|   |--calculateMonthlyTransaction.js
|   |--calculateTotalRewards.js
|   |--rewardsHelper.js
|
|-- App.js
|-- index.js
|-- logger.js


![alt text](https://github.com/NityaK123/Retailer-Shop/blob/main/public/assets/transactionTableOutput.png)

![alt text](https://github.com/NityaK123/Retailer-Shop/blob/main/public/assets/monthlyRewardsTableOutput.png) 
 
![alt text](https://github.com/NityaK123/Retailer-Shop/blob/main/public/assets/totalRewardsTableOutput.png) 

![alt text](https://github.com/NityaK123/Retailer-Shop_updated/blob/main/public/assets/testCaseResult.png) 

