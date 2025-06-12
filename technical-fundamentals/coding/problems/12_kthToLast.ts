// 2.  *Return Kth to Last*:

// Implement an algorithm to find the kth to last element of a singly linked list.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

//iterative second approach
export default function kthToLast<T>(head: Node<T>, k: number): Node<T> | undefined {
  let p1: Node<T> | undefined = head
  let p2: Node<T> | undefined = head

  for (let i=0;i<k;i++) {
    if(!p1) return undefined
    p1=p1.next;
  }

  while(p1) {
    p1=p1.next
    p2=p2? p2.next: p2
  }
  return p2
}

export function kthToLastRecursiveImpl<T>(head: Node<T>, k: number): Node<T> | undefined {
  if(k<1) {
    return undefined
  }

  const result=head
  const counter = kthLastRecursive(head, k, result)

  if(k>counter) {
    return undefined
  }
  return result.next
}

//1 -> 2 -> 3 -> 4 -> 5 k=6 expected 1
/*
    1st: 1 -> 2 -> 3 -> 4 -> 5 ---- 5 --> result.next = head
      2nd: 2 -> 3 -> 4 -> 5 ---- 4
        3rd: 3 -> 4 -> 5 ---- 3
          4th: 4 -> 5 ---- 2
            5th: 5 -> null ---- 1

 */
function kthLastRecursive<T>(head: Node<T>, k:number, result: Node<T>): number {
  //create a counter that increases when head.next is undefined.
  //when it hits k we know we have the correct node.
  if(!head.next) {
    return 1
  }
  const counter = kthLastRecursive(head.next, k, result) + 1

  if(counter===k) {
    result.next=head
  }

  return counter
}

export function kthToLastIterative<T>(
  head: Node<T>,
  k: number,
): Node<T> | undefined {
  if(k<1) return undefined
  //I should iterate in reverse.
  //Look for the last element k elements apart

  //1 -> 2 -> 3 -> 4 -> 5 k=5 expected 1
  /*
      current 1 -> 2 -> 3 -> 4 -> 5
      runner 1 -> null
      temp 5 4 3 2 1
   */
  let current: Node<T> | undefined = head;
  while(current) {
    let runner = current
    let temp=k;
    while(temp>0 && runner.next) {
      temp--
      runner.next=runner.next.next
    }

    if(temp===1 && runner.next === undefined) {
      return current
    }
    current=current.next
  }
  return current
}
