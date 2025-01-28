import React,{useMemo} from "react";
import Table from "react-bootstrap/Table";
import { calculateRewardPoints } from "../utils/rewardPoints";
import PropTypes from "prop-types";

const MonthlyReward = ({ data }) => {


  const monthlyRewardPointsData = useMemo(() => {
    return data.map((val) => ({
      ...val,
      rewardsPoint: calculateRewardPoints(val.totalPrice),
    }));
  }, [data]);


  return (
    <div id="table">
      <h1>Monthly Rewards</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr id="tr">
            <th>Customer Id</th>
            <th>Name</th>
            <th>Month</th>
            <th>Year</th>
            <th>Reward Points</th>
          </tr>
        </thead>
        <tbody>
          {monthlyRewardPointsData.map((val, index) => {
            return (
              <tr key={index}>
                <td>{val.customerId}</td>
                <td>{val.customerName}</td>
                <td>{val.purchaseMonth}</td>
                <td>{val.purchaseYear}</td>
                <td id="rewardPoints">{val.rewardsPoint}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

MonthlyReward.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      customerId: PropTypes.string.isRequired,
      customerName: PropTypes.string.isRequired,
      purchaseMonth: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired, // Month can be either a string or number
      purchaseYear: PropTypes.number.isRequired, // Year should be a number
      totalPrice: PropTypes.number.isRequired,
    }),
  ),
};

export default MonthlyReward;
