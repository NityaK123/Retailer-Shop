# Retailer-Shop
This is retailer shop in which customer buy the product and shop give points and rewards.

Steps:
Create a Folder md 1383946 then cd 1383946.
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
|-- api.json
|-- index.html
|
src/
|-- components/
|   |-- MonthlyReward.jsx
|   |-- TotalReward.jsx
|   |-- Transactions.js
|
|--pages/
|   |--Home.jsx
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
|   |--rewardPoints.js 
|
|-- App.js
|-- index.js



![alt text](image.png)


![alt text](image-3.png)


![alt text](image-2.png)



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
