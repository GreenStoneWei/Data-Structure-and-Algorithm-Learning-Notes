class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let length = 1
  let currentNode = head
  while (currentNode.next) {
    currentNode = currentNode.next
    length += 1
  }

  const targetIndex = length - n

  if (length === 1 && n === 1) {
    head = null
    return head
  }

  if (length === n) {
    head = head.next
    return head
  }

  let prevNode = head
  let targetNode = head
  let currentIndex = 1

  while (targetNode && currentIndex < targetIndex) {
    prevNode = targetNode
    targetNode = targetNode.next
    currentIndex++
  }
  if (n === 1) {
    targetNode.next = null
  } else {
    targetNode.next = targetNode.next.next
  }

  return head
}

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/222301/JavaScript
// var removeNthFromEnd = function(head, n) {
//     const help = (root, count) => {
//       if (root.next) count = help(root.next, count);

//       if (count === n) root.next = root.next.next;
//       return ++count;
//     }
//     const count = help(head, 0);
//     return count === n ? head.next : head;
//   };

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/discuss/8802/3-short-Python-solutions
// class Solution:
//     def removeNthFromEnd(self, head, n):
//         fast = slow = head
//         for _ in range(n):
//             fast = fast.next
//         if not fast:
//             return head.next
//         while fast.next:
//             fast = fast.next
//             slow = slow.next
//         slow.next = slow.next.next
//         return head
/**
 * 快慢指針做法，很聰明
 * 由於長度是固定的
 * 要的位置是 length - n
 */
