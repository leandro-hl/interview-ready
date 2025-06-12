// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {
    //"abcdefga" is not unique.
    //storing each in a map I can easily check if a char was already added to it.
    //other option is to sort the array and see if we have two consecutive elements
    //other option is to iterate with a nested for loop
    const check = str.split('').sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0))
    for(let i=0;i<check.length-1;i++) {
        if(check[i]===check[i+1]) {
            return false;
        }
    }
    return true;
}
