// 4. *Queue via Stacks*:

// Implement a MyQueue class which implements a queue using two stacks.

export default class MyQueue<T> {
    /*
        the idea of using two stacks is that in the queue process you simply add the element to the stack
        but in order to dequeue you need to reverse the stack and get the oldest element first.

        We know that we always need the oldest element first. In order to not reverse the second stack every
        time we need to make a dequeue operation, we can use the second stack as a buffer of old elements while we
        add new elements only to the new elements stack. Once the old elements stack is empty we pull more elements
        from the new stack
     */
    private old: Array<T | undefined>
    private new: Array<T>
    constructor() {
        this.old = new Array<T>()
        this.new = new Array<T>()
    }

    enqueue(value: T): void {
        this.new.push(value)
    }

    dequeue(): T | undefined {
        this._populateOldIfNeeded()
        return this.old.pop()
    }

    peek(): T | undefined {
        this._populateOldIfNeeded()
        return this.old[this.old.length-1]
    }

    isEmpty(): boolean {
        return this.old.length + this.new.length === 0
    }

    private _populateOldIfNeeded() {
        if(this.old.length===0) {
            while(this.new.length>0) {
                this.old.push(this.new.pop())
            }
        }
    }
}
