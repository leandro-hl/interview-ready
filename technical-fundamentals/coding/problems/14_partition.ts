// 4. *Partition*:

// Write code to partition a linked list around a value x,
// such that all nodes less than x come before all nodes greater than or equal to x.
// If x is contained within the list, the values of x only need to be after the elements
// less than x (see below). The partition element x can appear anywhere in the
// "right partition"; it does not need to appear between the left and right partitions.

// ```
// EXAMPLE
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1[partition=5]
// Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export type NodeDefault<T> = {
  value: number;
  next?: Node<T>;
}

export default function partition<T>(head: Node<T> | undefined, x: T): Node<T> | undefined {
  if(!head) return head;

  const left: NodeDefault<any> = {value: -1, next: undefined}
  const right: NodeDefault<any> = {value: -1, next: undefined}

  let pl = left
  let pr = right
  let p: Node<T> | undefined = head
  while(p) {
    if(p.value<x) {
      pl.next={value: p.value}
      pl=pl.next
    } else {
      pr.next={value: p.value}
      pr=pr.next
    }
    p=p.next
  }

  pl.next=right.next
  return left.next
}

export function partitionApproach1<T>(
  head: Node<T> | undefined,
  x: T,
): Node<T> | undefined {

  //1. all nodes less than x come before all nodes greater than or equal to x

  //2. if x exists in the list, x should appear after all lower elements but in any order between the greater elements
  /*
      Input: [] -> 3 -> 5 -> 8 -> 5 -> 10-> 1     [look for=5]
      Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8
        - 5 appears in the list
        - all elements lower than 5 are at its left
        - all elements greater than 5 can be on the left while bigger than 5 or in the right
   */

  let p = head
  if(!p) return p;

  let lastLess= {value: -1, next: head}
  while(p?.next) {
    if(p.next.value<x) {
      lastLess.next={value: p.next.value, next: lastLess.next}
      //remove the element
      p.next=p.next.next
    } else {
      p=p.next
    }
  }

  return lastLess.next
}
