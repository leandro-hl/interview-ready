// 9. *Loop Detection*:

// Given a circular linked list, implement an algorithm that returns the node
// at the beginning of the loop.

// ```
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer
// points to an earlier node, so as to make a loop in the linked list.
// ```

// ```
// EXAMPLE
// Input: A->8->C->D->E-> C[thesameCasearlier] Output: C
// Hints: #50, #69, #83, #90
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function detectLoop<T>(
  head: Node<T> | undefined,
): Node<T> | undefined {
  //Input: A->8->C->D->E-> C[thesameCasearlier] Output: C
  //make the first collision
  let s = head
  let f = head

  //loop detection
  while(true) {
    f = f?.next?.next
    s = s?.next
    if(s === f) {
      break
    }
  }

  if(!s && !f) {
    return undefined
  }

  s = head
  while(true) {
    f = f?.next
    s = s?.next
    if(s === f) {
      break
    }
  }

  return s
}
