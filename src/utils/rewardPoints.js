export const RewardPoint = (totalPrice) => {
    let rewardsPoint = totalPrice > 100 ? (totalPrice - 100) * 2 + 50 : totalPrice > 50 ? totalPrice - 50 : 0
    rewardsPoint = Math.floor(rewardsPoint)
    return rewardsPoint;
}