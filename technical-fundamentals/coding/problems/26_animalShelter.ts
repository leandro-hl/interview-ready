// 6. *Animal Shelter*:

// An animal shelter, which holds only dogs and cats, operates on a strictly
// "first in, first out" basis. People must adopt either the "oldest"
// (based on arrival time) of all animals at the shelter,
// or they can select whether they would prefer a dog or a cat
// (and will receive the oldest animal of that type).
// They cannot select which specific animal they would like.
// Create the data structures to maintain this system and implement operations
// such as enqueue, dequeueAny, dequeueDog, and dequeueCat.
// You may use the built-in LinkedList data structure.

export type AnimalType = "dog" | "cat";
export type QueueType = "all"

export class Animal {
  type: AnimalType;
  constructor(type: AnimalType) {
    this.type = type;
  }
}

export class Node {
    value: Animal
    next: Node | undefined
    prev: Node | undefined
}

type ShelterItem = Node | undefined

export default class AnimalShelter {
    dog: ShelterItem[]
    cat: ShelterItem[]
    all: ShelterItem[]

    constructor() {
        this.dog = []
        this.cat = []
        this.all = []
    }

    enqueue(type: AnimalType): void {
        this._enqueue(type, type)
        this._enqueue(type, 'all')
    }

    _enqueue(type: AnimalType, queueType: AnimalType | QueueType) {
        if(this[queueType].length>0) {
            const newNode = {value: new Animal(type), next: this[queueType][1], prev: undefined}
            this[queueType][1]!.prev=newNode
            this[queueType][1]=newNode
        } else {
            const newNode={value: new Animal(type), next: undefined, prev: undefined}
            this[queueType] = [newNode, newNode]
        }
    }

    dequeueAny(): Animal | undefined {
        const animal = this._dequeue('all')
        if(animal) {
            //sync queues
            this._dequeue(animal.type)
        }
        return animal
    }

    dequeueDog(): Animal | undefined {
        const animal = this._dequeue('dog')
        this._dequeueTailCascade(animal)
        return  animal
    }

    dequeueCat(): Animal | undefined {
        const animal = this._dequeue('cat')
        this._dequeueTailCascade(animal)
        return  animal
    }

    _dequeueTailCascade(animal: Animal | undefined) {
        if(animal) {
            let allTail = this.all[0]
            while(allTail && allTail.value.type !== animal.type) {
                allTail = allTail.prev
            }

            if(allTail && allTail.prev) {
                //I remove the reference to myself from the list
                allTail.prev.next = allTail.next
            }

        }
    }

    _dequeue(type: AnimalType | QueueType): Animal | undefined{
        //set tail to prev node and return node value
        const a = this[type][0]
        this[type][0]=a?.prev

        if(!this[type][0]) {
            // I reset the queue because we consumed the last element
            this[type] = []
        }

        return a?.value
    }
}

