// 328. Odd Even Linked List
// Medium
// 8.9K
// 481
// Companies
// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
// Example 2:

// Input: head = [2,1,3,5,6,4,7]
// Output: [2,3,6,7,1,5,4]

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let oddEvenArr: number[] = [];
  let temp = head;
  while (temp) {
    oddEvenArr.push(temp.val);
    temp = temp.next;
  }

  let oddElements = [];
  let evenElements = [];
  for (let index = 0; index < oddEvenArr.length; index++) {
    if (index % 2 === 1) {
      oddElements.push(oddEvenArr[index]);
    } else {
      evenElements.push(oddEvenArr[index]);
    }
  }

  let joinElementsInOrder = evenElements.concat(oddElements);

  let newListHead = new ListNode(joinElementsInOrder[0]);
  let current = newListHead;
  for (let index = 1; index < joinElementsInOrder.length; index++) {
    current.next = new ListNode(joinElementsInOrder[index]);
    current = current.next;
  }
  return newListHead;
}

function oddEvenListOptimize(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  let evenHead = head.next;
  let oddHead = head;

  let evenPointer = evenHead;
  let oddPointer = oddHead;

  while (evenPointer && evenPointer.next) {
    oddPointer.next = evenPointer.next;
    oddPointer = oddPointer.next;

    evenPointer.next = oddPointer.next;
    evenPointer = evenPointer.next;
  }

  oddPointer.next = evenHead;

  return oddHead;
}
