import React,{useMemo} from "react";
import Table from "react-bootstrap/Table";
import { calculateRewardPoints } from "../utils/rewardPoints";
import PropTypes from "prop-types";

const TotalReward = ({ data }) => {

  const totalRewardPointsData = useMemo(() => {
      return data.map((val) => ({
        ...val,
        rewardsPoint: calculateRewardPoints(val.totalPrice),
      }));
    }, [data]);

  return (
    <div id="table">
      <h1>Total Rewards</h1>
      <Table striped bordered hover>
        <thead>
          <tr id="tr">
            <th>Customer Id</th>
            <th>Customer Name</th>
            <th>Total Rewards Points</th>
          </tr>
        </thead>
        <tbody>
          {totalRewardPointsData.map((val, index) => {
            return (
              <tr key={index}>
                <td>{val.customerId}</td>
                <td>{val.customerName}</td>
                <td id="rewardPoints">{val.rewardsPoint}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

TotalReward.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      customerId: PropTypes.string.isRequired,
      customerName: PropTypes.string.isRequired,
      totalPrice: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default TotalReward;
