// 4. *Palindrome Permutation*: 

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation(str: string): boolean {
    const clean = str.replaceAll(' ','').toLowerCase();
    const set: {[key: string]: number} = {}

    for(let i=0;i<clean.length;i++) {
        const char = clean[i]
        if(set[char]) {
            set[char]++
        } else {
            set[char]=1
        }
    }

    return Object.values(set).filter(k => k % 2 !== 0).length <= 1
}

export function palindromePermutationV1 (str: string): boolean {
    //don't take into account the spaces
    //convert all to lower case
    //if there are an odd amount of characters, only the middle one could
    //  have one occurrence. All the others should appear even times.
    //Since permutations are allowed, a stack cannot be used because the order of
    //  both sides are not guaranteed
    //I could sort each side and then iterate n/2 checking each char equality
    //  to sort each side I first need to create two new arrays and populate them
    //I could save the letters in a set and increment a counter for each
    //  up until the n/2 of the array.
    //  the second half decrements.
    //  if a letter is not in the set or the counter becomes negative
    //  we cut the iteration and return false

    const clean = str.replaceAll(' ','').toLowerCase()

    const set: {[key: string]: number} = {}
    let middle=Math.floor(clean.length/2) //1,2,3,4 = 2 -- 1,2,3 = 1
    for(let i=0;i<middle;i++) {
        const char=clean[i]
        const current=set[char]
        if(current) {
            set[char]++
        } else {
            set[char]=1
        }
    }

    if(clean.length % 2 !== 0) {
        middle++
    }

    for(let i=middle;i<clean.length;i++) {
        const char=clean[i]
        let current = set[char]
        //doesn't exist on the left side
        if(!current) {
            return false;
        }

        //there are not as many on the left side
        current--
        if(current<0) {
            return false;
        }
    }

    return true;
}