// 2. *Stack Min*: How would you design a stack which,
// in addition to push and pop,
// has a function min which returns the minimum element?
// Push, pop, and min should all operate in O(1) time.
//

class Node<T> {
    val: T;
    next: Node<T> | undefined
}

export default class StackMin<T> {
    private array: T[]
    private minList: Node<T> | undefined

    constructor() {
        this.array = []
    }

    push(value: T): void {
        this.array.push(value)
        if(!this.minList || value<this.minList.val) {
            this.minList = {val:value, next: this.minList}
        }
    }

    pop(): T | undefined {
        const val = this.array.pop()
        if(val===this.minList?.val) {
            this.minList = this.minList?.next
        }
        return val
    }

    min(): T | undefined {
        return this.minList?.val
    }
}
