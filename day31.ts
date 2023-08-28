// 206. Reverse Linked List
// Easy
// 19.3K
// 349
// Companies
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]
// Example 2:

// Input: head = [1,2]
// Output: [2,1]
// Example 3:

// Input: head = []
// Output: []

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

function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let arrayList = [];
  let temp: ListNode = head;
  while (temp) {
    arrayList.push(temp.val);
    temp = temp.next;
  }

  let newReverseList = new ListNode(arrayList[arrayList.length - 1]);
  let current = newReverseList;
  for (let index = arrayList.length - 2; index >= 0; index--) {
    current.next = new ListNode(arrayList[index]);
    current = current.next;
  }

  return newReverseList;
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }
  let current: ListNode = head;
  let prev = null;
  while (current) {
    let nextNode: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}
