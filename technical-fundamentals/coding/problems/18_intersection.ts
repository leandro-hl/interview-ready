// 8.  *Intersection*;

// Given two (singly) linked lists, determine if the two lists intersect.
// Return the first intersecting node. Note that the intersection is defined
// based on reference, not value.

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function intersection<T>(
  list1: Node<T> | undefined,
  list2: Node<T> | undefined,
): Node<T> | undefined {
  // Common part: 7 -> 8 -> 9
  // List 1: 1 -> 2 -> 3 -> 4 ->
  //                             7 -> 8 -> 9
  // List 2:           5 -> 6 ->
  /*
     I only need to find the first common node.
     opt 1: reverse both lists
            - the result need to be reversed again to be returned
     opt 2: iterate recursively to the end of both and compare
            - they are different length, so I might need a pad
            - I will need the length of both to calc de pad
            - Instead of the pad I can get rid of the first n nodes in the longest list
   */

  let length1 = 0
  let length2 = 0
  let p1 = list1
  let p2 = list2

  //O(n) when n=longest
  while(p1 || p2) {
    if(p1) {
      length1++
      p1 = p1.next
    }
    if(p2) {
      length2++
      p2 = p2.next
    }
  }

  let diff = Math.abs(length1-length2)
  let shrink = list1
  p2 = list2
  if(length1 < length2) {
    shrink=list2
    p2=list1
  }

  //O(k) where k = n-m
  while(diff) {
    shrink = shrink?.next
    diff--
  }

  //O(n)
  while(shrink && p2) {
    if(shrink === p2) {
      return shrink
    }
    shrink = shrink.next
    p2 = p2.next
  }
  return undefined
}
