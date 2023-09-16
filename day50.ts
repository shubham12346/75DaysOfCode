// 2336. Smallest Number in Infinite Set
// Solved
// Medium
// Topics
// Companies
// Hint
// You have a set which contains all positive integers [1, 2, 3, 4, 5, ...].

// Implement the SmallestInfiniteSet class:

// SmallestInfiniteSet() Initializes the SmallestInfiniteSet object to contain all positive integers.
// int popSmallest() Removes and returns the smallest integer contained in the infinite set.
// void addBack(int num) Adds a positive integer num back into the infinite set, if it is not already in the infinite set.
 

// Example 1:

// Input
// ["SmallestInfiniteSet", "addBack", "popSmallest", "popSmallest", "popSmallest", "addBack", "popSmallest", "popSmallest", "popSmallest"]
// [[], [2], [], [], [], [1], [], [], []]
// Output
// [null, null, 1, 2, 3, null, 1, 4, 5]

// Explanation
// SmallestInfiniteSet smallestInfiniteSet = new SmallestInfiniteSet();
// smallestInfiniteSet.addBack(2);    // 2 is already in the set, so no change is made.
// smallestInfiniteSet.popSmallest(); // return 1, since 1 is the smallest number, and remove it from the set.
// smallestInfiniteSet.popSmallest(); // return 2, and remove it from the set.
// smallestInfiniteSet.popSmallest(); // return 3, and remove it from the set.
// smallestInfiniteSet.addBack(1);    // 1 is added back to the set.
// smallestInfiniteSet.popSmallest(); // return 1, since 1 was added back to the set and
//                                    // is the smallest number, and remove it from the set.
// smallestInfiniteSet.popSmallest(); // return 4, and remove it from the set.
// smallestInfiniteSet.popSmallest(); // return 5, and remove it from the set.


class SmallestInfiniteSet {
    currentSmall: number = 1
    addedList: number[] = []
  
    popSmallest(): number {
      if (this.addedList.length) {
        return this.addedList.shift()
      } else {
        this.currentSmall = this.currentSmall + 1
        return this.currentSmall - 1
      }
    }
  
    addBack(num: number): void {
      if (num < this.currentSmall) {
        if(!this.addedList.includes(num)) {
          this.addedList.push(num)
        
          this.addedList = this.addedList.sort((a,b) => a - b)
        }
      }
    }
  }
  
  /**
   * Your SmallestInfiniteSet object will be instantiated and called as such:
   * var obj = new SmallestInfiniteSet()
   * var param_1 = obj.popSmallest()
   * obj.addBack(num)
   */