// 1. *Three in One*: Describe how you could use a single array to implement three stacks.

class Meta {
    tail: number;
    head: number;
    constructor(seed: number) {
        this.tail = seed
        this.head = seed
    }
    canPush(nextTail: number):boolean {
        return this.head < nextTail
    }
}

export default class ThreeStacks<T> {
    private array: T[];
    private configs:  Meta[]
    private stackLength: number

    constructor(arrayLength: number) {
        this.array = new Array<T>(arrayLength*3)
        this.configs = [
            new Meta(0),
            new Meta(arrayLength),
            new Meta(arrayLength*2)
        ]
        this.stackLength = arrayLength
    }

    push(stackNum: number, value: T): void {
        // [000/111/222] length 9 [0,1,2] / [3,4,5] / [6,7,8]
        // invalid stack num
        if(stackNum>this.configs.length || stackNum < 0) return

        //stackNum is already the index
        const index = stackNum
        if(index==this.configs.length-1) {
            if(this.configs[index].head>=this.array.length) {
                //overflow
                return
            }
        } else if(!this.configs[index].canPush(this.configs[stackNum+1].tail)) {
            //overflow
            return
        }

        this.array[this.configs[index].head]=value
        this.configs[index].head++
    }

    pop(stackNum: number): T | undefined {
        const conf = this.configs[stackNum]
        if(conf.head>conf.tail) {
            this.configs[stackNum].head--
            return this.array[conf.head]
        }
        return undefined
    }

    peek(stackNum: number): T | undefined {
        return this.array[this.configs[stackNum].head-1]
    }
}