// 3. *Delete Middle Node*:

// Implement an algorithm to delete a node in the middle
// (i.e., any node but the first and last node, not necessarily the exact middle)
// of a singly linked list, given only access to that node.

// ```
// EXAMPLE
// Input: the node c from the linked list a - >b- >c - >d - >e- >f
// Result: nothing is returned, but the new linked list looks like a->b->d->e->f Hints: #72
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function deleteMiddleNode<T>(
  head: Node<T>,
  position: number,
): Node<T> | undefined {
  if(position<1) return head

  let p: Node<T> | undefined = head

  // 1,2,3,4,5,6 position: 8. iterate from 0 to 2 -> 2 items
  //   *
  for(let i=0;i<position-1;i++) {
    if(!p) return head
    p=p.next
  }

  //meaning the list is at least k items length. The k item is the next item.
  if(!p || !p.next) return head
  p.next=p.next.next
  return head
}
