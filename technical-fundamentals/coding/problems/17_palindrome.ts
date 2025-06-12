// 7. *Palindrome*:

// Implement a function to check if a linked list is a palindrome.

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function isPalindrome<T>(head: Node<T> | undefined): boolean {
  // a -> b -> c -> d -> c -> b -> a
  //      *              *
  // a -> b -> c -> d -> c -> b -> a
  let p = head
  let headReverse: Node<T> | undefined = undefined
  let length=0
  while(p) {
    headReverse = {value: p.value, next: headReverse}
    p=p.next
    length++
  }
  let i=Math.floor(length/2)
  while(i) {
    if(headReverse?.value!==head?.value) return false
    headReverse=headReverse?.next
    head=head?.next
    i--
  }
  return true
}
