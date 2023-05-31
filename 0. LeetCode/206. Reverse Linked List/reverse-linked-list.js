/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

let reverseList = function (head) {
  // Initializing the first two pointers.
  let previousPosition = null; // The previous position: as `head` is the current position, this is `null`
  let currentPosition = head; // Setting the current position as `head`

  // Using a while loop to do the reversal of the list.
  while (currentPosition !== null) {
    let newPosition = currentPosition.next; // Saving the position of `next` item in a new variable
    currentPosition.next = previousPosition;
    previousPosition = currentPosition;
    currentPosition = newPosition;
  }
  return previousPosition;
};
