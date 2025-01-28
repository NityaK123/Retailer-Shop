import React,{useMemo} from "react";
import Table from "react-bootstrap/Table";
import { calculateRewardPoints } from "../utils/rewardPoints";
import PropTypes from "prop-types";

const TransactionDetails = ({ data }) => { 

   const totalTransaction = useMemo(() => {
        return data.map((val) => ({
          ...val,
          rewardsPoint: calculateRewardPoints(val.price),
        }));
      }, [data]);
  

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
          {totalTransaction.map((val, index) => {
            return (
              <tr key={index}>
                <td>{val.transactionId}</td>
                <td>{val.customerName}</td>
                <td>{val.purchaseDate}</td>
                <td>{val.productPurchased}</td>
                <td>{val.price}</td>
                <td id="rewardPoints">{val.rewardsPoint}</td>
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
    }),
  ).isRequired, // data is required and must be an array of objects that match the shape
};

export default TransactionDetails;
