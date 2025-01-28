import React from "react";
import Table from "react-bootstrap/Table";
import { calculateRewardPoints } from "../utils/rewardPoints";
import PropTypes from "prop-types";

const TransactionDetails = ({ data }) => { 

  return (
    <div id="table">
      <h1>Transaction Details</h1>
      <Table striped bordered hover>
        <thead>
          <tr id="tr">
            <th>Transaction Id</th>
            <th>Customer Name</th>
            <th>Purchase Date</th>
            <th>Product Purchase</th>
            <th>Price</th>
            <th>Rewards Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val) => {
            // Memoize the reward points calculation only for each price
            const rewardsPoint = calculateRewardPoints(val.price)
            return (
              <tr key={val.transactionId}>
                <td>{val.transactionId}</td>
                <td>{val.customerName}</td>
                <td>{val.purchaseDate}</td>
                <td>{val.productPurchased}</td>
                <td>{val.price}</td>
                <td id="rewardPoints">{rewardsPoint}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

TransactionDetails.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      transactionId: PropTypes.string.isRequired,
      customerName: PropTypes.string.isRequired,
      purchaseDate: PropTypes.string.isRequired,
      productPurchased: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired, // data is required and must be an array of objects that match the shape
};

export default TransactionDetails;
