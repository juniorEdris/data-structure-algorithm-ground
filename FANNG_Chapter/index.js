export function FAANGFunc() {
  console.log("FAANG Chapter started!");
  // console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
}

/**
 * 
 * https://leetcode.com/problems/trapping-rain-water/
 * 
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]  Output: 6
    
  Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
 */

function trap(height) {
  let totalWater = 0;

  for (let p = 0; p < height.length; p++) {
    let leftP = p,
      rightP = p,
      maxLeft = 0,
      maxRight = 0;

    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, height[leftP]);
      leftP--;
    }

    while (rightP < height.length) {
      // 12
      maxRight = Math.max(maxRight, height[rightP]);
      rightP++;
    }

    const currentWater = Math.min(maxLeft, maxRight) - height[p];

    if (currentWater >= 0) {
      console.log({ maxLeft, maxRight });
      totalWater += currentWater;
    }
  }
  return totalWater;
}
