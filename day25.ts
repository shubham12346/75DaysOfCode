// 735. Asteroid Collision

// We are given an array asteroids of integers representing asteroids in a row.

// For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left). Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions. If two asteroids meet, the smaller one will explode. If both are the same size, both will explode. Two asteroids moving in the same direction will never meet.

// Example 1:

// Input: asteroids = [5,10,-5]
// Output: [5,10]
// Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.
// Example 2:

// Input: asteroids = [8,-8]
// Output: []
// Explanation: The 8 and -8 collide exploding each other.
// Example 3:

// Input: asteroids = [10,2,-5]
// Output: [10]
// Explanation: The 2 and -5 collide resulting in -5. The 10 and -5 collide resulting in 10.

function asteroidCollision(asteroids: number[]): number[] {
  const result = [];
  let check: boolean;

  for (let asteroid of asteroids) {
    check = true;
    while (result.length && asteroid < 0 && result[result.length - 1] > 0) {
      if (result[result.length - 1] == -asteroid) {
        result.pop();
        check = false;
        break;
      } else if (result[result.length - 1] < -asteroid) {
        result.pop();
        continue;
      } else if (result[result.length - 1] > -asteroid) {
        check = false;
        break;
      }
    }
    if (check) {
      result.push(asteroid);
    }
  }
  return result;
}

let ans = asteroidCollision([5,10,-5]);
console.log(ans)