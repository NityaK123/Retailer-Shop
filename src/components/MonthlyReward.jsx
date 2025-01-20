import React from "react";
import Table from "react-bootstrap/Table";
import { RewardPoint } from "../utils/rewardPoints";
jest.mock("../utils/rewardPoints"); // Mocking the RewardPoint utility

const RetailerShop = ({ data }) => {
  return (
    <div id="table">
      <h1>User Monthly Rewards</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>S. NO.</th>
            <th>Customer Id</th>
            <th>Name</th>
            <th>Month</th>
            <th>Year</th>
            <th>Reward Points</th>
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
                <td>{val.purchaseMonth}</td>
                <td>{val.purchaseYear}</td>
                <td>{rewardsPoint}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default RetailerShop;
