// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

export default function isOneAway(str1: string, str2: string): boolean {
    //strings differ on zero or one char
    //insert or remove mean their length is one apart
    let diff=Math.abs(str1.length-str2.length)
    if(diff>1) {
        return false
    }
    if(diff===1) {
        return true
    }

    //at this point they are always equal length
    for(let i=0;i<str1.length;i++) {
        if(str1[i]!==str2[i]) {
            diff++
        }
        if(diff>1) {
            return false
        }
    }
    return true
}
