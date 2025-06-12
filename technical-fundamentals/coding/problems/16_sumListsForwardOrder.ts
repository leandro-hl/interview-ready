// 6.  Suppose the digits are stored in forward order. Repeat the above problem.

// ```
// EXAMPLE
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). Thatis,617 + 295
// Output:9 -> 1 -> 2,Thatis,912.
// ```

export type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default function sumListsForwardOrder(
    list1: Node<number> | undefined,
    list2: Node<number> | undefined,
): Node<number> | undefined {
  if(!list1) return list2
  if(!list2) return list1

  return _sumListsForwardOrderV1(list1, list2)
}

function _sumListsForwardOrderV2(
    list1: Node<number> | undefined,
    list2: Node<number> | undefined,
) {
  let p1=list1
  let p2=list2
  let length1 = 0
  let length2 = 0
  while(p1 || p2) {
    if(p1) {
      length1++
      p1=p1.next
    }
    if(p2) {
      length2++
      p2=p2.next
    }
  }

  let padLength = Math.abs(length1-length2)
  let pad: Node<number> | undefined = {value: -1}
  let pp = pad
  while(true) {
    pp.next={value: 0}
    padLength--
    if(!padLength) break
    pp=pp.next
  }
  pad=pad.next

  const result: Node<number> = {value: -1}
  const p = result
  if(length1>length2) {
    pp.next=list2
    _sumListsForwardOrderRecursive(list1, pad, p)
  } else {
    pp.next=list1
    _sumListsForwardOrderRecursive(pad, list2, p)
  }
}

function _sumListsForwardOrderRecursive(
    list2: Node<number> | undefined,
    list1: Node<number> | undefined,
    p: Node<number>,
): number {
  //result starts populating once we are at the end of both lists which we know that are the same length
  //end means there is no next, although it is easier to check if current is null
  if(list1 && list2) {
    if(!list1.next && !list2.next) {
      const sum = list1.value+list2.value
      p.value=sum%10
      return Math.floor(sum/10)
    }

    p.next = {value: 0}
    const rest = _sumListsForwardOrderRecursive(list1.next, list2.next, p.next)
    const sum = list1.value+list2.value+rest
    p.value=sum%10
    return Math.floor(sum/10)
  }
  return 0
}

function _sumListsForwardOrderV1(
    list2: Node<number> | undefined,
    list1: Node<number> | undefined,
) {
  const digitsL1 = []
  const digitsL2 = []
  let curr: Node<number> | undefined = list1
  while(curr) {
    digitsL1.push(curr.value)
    curr = curr.next
  }
  curr = list2
  while(curr) {
    digitsL2.push(curr.value)
    curr = curr.next
  }

  const digits = []
  let rest = 0
  while(true) {
    const d1 = digitsL1.pop()
    const d2 = digitsL2.pop()
    let sum = rest
    if(!d1 && d2) {
      sum+=d2
    }else if(d1 && !d2) {
      sum+=d1
    } else if(!d1 && !d2) {
      break
    } else if(d1 && d2) {
      sum+=d1+d2
    }

    rest = Math.floor(sum/10)
    const digit = sum%10

    digits.push(digit)
  }

  if(rest) {
    digits.push(rest)
  }

  const result: Node<number> = {value: -1}
  let pointer = result
  while(true) {
    const val = digits.pop()
    if(val === undefined) break
    pointer.next={value: val}
    pointer=pointer.next
  }
  return result.next
}
