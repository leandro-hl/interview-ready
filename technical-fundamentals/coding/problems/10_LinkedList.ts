// 10. *Implement a Linked List*;

// Create the data structure with the corresponding initial functions:

export type Node<T> = {
  next?: Node<T> | undefined;
  value: T;
};

export class LinkedList<T> {
  head: Node<T> | undefined;
  tail: Node<T> | undefined;

  constructor(head?: Node<T>) {
    this.head=head;
    this.tail=head;
  }

  push(value: T) {
    const newNode: Node<T> = {value: value};
    if(this.head === undefined) {
      this.head=newNode
      this.tail=newNode
    } else {
      if(this.tail) this.tail.next=newNode
      this.tail = newNode
    }
  }
  filter() {}
  visit() {}
  remove() {

  }
  merge() {}
  print() {}

  // extra

  //find(): Node<T> {}
  //get(index: number): Node<T> {}
  //iterator(): LinkedListIterator {}
  length: number;
}

const list = new LinkedList();
