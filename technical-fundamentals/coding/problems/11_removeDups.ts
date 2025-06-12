// 1. *Remove Dups*:

// Write code to remove duplicates from an unsorted linked list. FOLLOW UP
// How would you solve this problem if a temporary buffer is not allowed?
//
// 1 -> 2 -> 2-> 2 -> 4

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function removeDups<T>(head?: Node<T>): Node<T> | undefined {
  //use a current and a runner pointer
  /*
      1 -> 2 -> 2-> 2 -> 4
      2 -> 1 -> 2 -> 1 => 2 -> 1
   */
  let p = head;
  while(p) {
    let runner = p
    while(runner.next) {
      if(runner.next.value===p.value) {
        runner.next = runner.next.next
      } else {
        runner = runner.next
      }
    }
    p=p.next
  }
  return head
}

export function removeDupsBuffer<T>(head?: Node<T>): Node<T> | undefined {
  /*
      1 -> 2 -> 2-> 2 -> 4
      2 -> 1 -> 2 -> 1 => 2 -> 1
   */
  const buffer: T[]=[]
  let pointer = head
  if(!pointer) {
    return head
  }
  buffer.push(pointer.value)
  while(pointer.next) {
    if(buffer.indexOf(pointer.next.value)>=0) {
      pointer.next = pointer.next.next
    } else {
      buffer.push(pointer.next.value)
      pointer=pointer.next
    }
  }

  return head;
}
