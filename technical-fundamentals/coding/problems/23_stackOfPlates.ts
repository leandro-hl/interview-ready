// 3. *Stack of Plates*:

// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack
// exceeds some threshold. Implement a data structure SetOfStacks that mimics this.
// SetOfStacks should be composed of several stacks and should create a new stack once
// the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave
// identically to a single stack (that is, pop() should return the same values as it would if
// there were just a single stack).

// FOLLOW UP: Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

export default class StackOfPlates<T> {
    private array: T[][]
    private readonly capacity: number
    constructor(capacity: number) {
        this.array = [new Array(capacity)]
        this.capacity = capacity
    }

    push(value: T): void {
        if(this.array[this.array.length-1].length===this.capacity){
            this.array.push(new Array(this.capacity))
        }
        this.array[this.array.length-1].push(value)
    }

    pop(): T | undefined {
        const item = this.array[this.array.length-1].pop()
        if(!item && this.array.length-1>0) {
            this.array.pop()
            return this.array[this.array.length-1].pop()
        }
        return item
    }

    popAt(index: number): T | undefined {
        if(index<0 || index>this.array.length-1) return undefined
        //says nothing but could mean recalculate the stacks
        //could also mean there is a chance we should remove this stack
        //todo: there are no tests for it
        return undefined
    }
}

