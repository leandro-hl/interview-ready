// 5. *Sum Lists*: You have two numbers represented by a linked list,
// where each node contains a single digit. The digits are stored in reverse order,
// such that the Vs digit is at the head of the list.
// Write a function that adds the two numbers and returns the sum as a linked list.

// ```
// EXAMPLE
// Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
// Output: 2 -> 1 -> 9. That is, 912.
// ```

import { LinkedList } from "./10_LinkedList";

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumLists(
  list1: Node<number> | undefined,
  list2: Node<number> | undefined,
): Node<number> | undefined {
  if(!list1 && !list2) return undefined
  if(!list1) return list2
  if(!list2) return list1
  // return sumListsIterative(list1, list2)
  return sumListsRecursively(list1, list2)
}

function sumListsRecursively(
    list1: Node<number>,
    list2: Node<number>
): Node<number> | undefined {
  const result: Node<number> = {value: -1}
  const p = result
  _sumListsRecursively(list1, list2, p, 0)
  return result.next
}

function _sumListsRecursively(
    list1: Node<number> | undefined,
    list2: Node<number> | undefined,
    p: Node<number>,
    rest: number) {
  if(!list1 && !list2) {
    if(rest) {
      p.next={value: rest}
    }
    return
  }

  let sum=rest;
  if(!list1 && list2) {
    sum+=list2.value
    list2=list2.next
  } else if(list1 && !list2) {
    sum+=list1.value
    list1=list1.next
  } else if(list1 && list2) {
    sum+=list1.value+list2.value
    list1=list1.next
    list2=list2.next
  }

  const digit = sum%10
  const newRest=Math.floor (sum/10)
  p.next={value: digit}
  p=p.next
  _sumListsRecursively(list1, list2, p, newRest)
}

function sumListsIterative(
    list1: Node<number> | undefined,
    list2: Node<number> | undefined,
): Node<number> | undefined {
  let result: Node<number> = {value:-1}
  let pr = result
  let rest = 0
  while(list1 || list2) {
    let sum = rest
    if(list1) {
      sum+=list1.value
      list1=list1.next
    }
    if(list2) {
      sum+=list2.value
      list2=list2.next
    }
    rest=0
    pr.next={value: sum%10}
    pr=pr.next

    //cannot be bigger than two digits because current lists are single digits too
    const twoDigits = sum>9
    if(twoDigits) {
      rest=Math.floor(sum/10)
    }
  }

  if(rest!==0) {
    pr.next={value: rest}
  }
  return result.next
}
