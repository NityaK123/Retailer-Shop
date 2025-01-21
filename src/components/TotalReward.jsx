import React from "react";
import Table from "react-bootstrap/Table";
import { RewardPoint } from "../utils/rewardPoints";
import PropTypes from 'prop-types'

const TotalReward = ({ data }) => {
  return (
    <div id="table">
      <h1>Total Rewards</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S. NO.</th>
            <th>Customer Id</th>
            <th>Customer Name</th>
            <th>Total Rewards Points</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((val, index) => {
            let rewardsPoint = RewardPoint(val.totalPrice);
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{val.customerId}</td>
                <td>{val.customerName}</td>
                <td>{rewardsPoint}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

TotalReward.propTypes = {
  data : PropTypes.array
}

export default TotalReward;
