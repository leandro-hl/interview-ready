// 5. *Sort Stack*:

// Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements
// into any other data structure (such as an array).
// The stack supports the following operations: push, pop, peek, and isEmpty.
/*
     5      [5]
     2      [5,2]
     3      [] 2 5 {2} [5,3,2]
     1      [5,3,2,1]
     5      [5,3,2] 1 2 3 5 {1,2,3} [5,5,3,2,1]
     10
 */

export default class SortStack<T> {
    private _stack: Array<T>
    constructor() {
        this._stack = new Array<T>()
    }

    push(value: T): void {
        const last = this.peek()
        if(!last || value<=last) {
            this._stack.push(value)
        } else {
            //find the element that is smaller than value
            const temp = new Array<T>()
            let element = this._stack.pop()
            while(element && value>element) {
                temp.push(element)
                element=this._stack.pop()
            }
            if(element) this._stack.push(element)
            this._stack.push(value)
            element = temp.pop()
            while(element) {
                this._stack.push(element)
                element = temp.pop()
            }
        }
    }

    pop(): T | undefined {
        return this._stack.pop()
    }

    peek(): T | undefined {
        return this._stack[this._stack.length-1]
    }

    isEmpty(): boolean {
        return this._stack.length===0
    }
}
