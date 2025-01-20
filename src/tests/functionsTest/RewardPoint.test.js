import { RewardPoint } from '../../utils/rewardPoints';


//Testing of RewardPoint function
describe('RewardPoint function', () => {
  
  test('should calculate rewards points correctly when totalPrice > 100', () => {
    const result = RewardPoint(599.99);
    // (599.99 - 100) * 2 + 50 = 499.99*2 + 50 = 1049.98
    expect(result).toBe(1049);
  });

  test('should calculate rewards points correctly when totalPrice is between 51 and 100', () => {
    const result = RewardPoint(80);
    // 80 - 50 = 30
    expect(result).toBe(30);
  });

  test('should return 0 when totalPrice is 50 or less', () => {
    const result = RewardPoint(50);
    // totalPrice <= 50, should return 0
    expect(result).toBe(0);
  });

  test('should calculate rewards points correctly when totalPrice is just above 100', () => {
    const result = RewardPoint(101);
    // (101 - 100) * 2 + 50 = 2 + 50 = 52
    expect(result).toBe(52);
  });

  test('should return 0 for a very small totalPrice', () => {
    const result = RewardPoint(0);
    // totalPrice <= 50, should return 0
    expect(result).toBe(0);
  });

  test('should return 50 when totalPrice is exactly 100', () => {
    const result = RewardPoint(100);
    // totalPrice == 100, should return 50
    expect(result).toBe(50);
  });

  test('should handle large totalPrice values correctly', () => {
    const result = RewardPoint(1000);
    // (1000 - 100) * 2 + 50 = 900 * 2 + 50 = 1850
    expect(result).toBe(1850);
  });

});

