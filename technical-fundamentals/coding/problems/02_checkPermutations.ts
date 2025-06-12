// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

export default function checkPermutations(s1: string, s2: string): boolean {
    //s2 is a permutation of s1 if it contains the same set of elements
    const set: {[key: string]: number} = {}
    //'abc','cba'
    //       000
    for(let i=0;i<s1.length;i++) {
        if(set[s1[i]]) {
            set[s1[i]]+=1
        } else {
            set[s1[i]]=1
        }
    }
    for(let i=0;i<s2.length;i++) {
        if(!set[s2[i]]) {
            return false;
        } else {
            set[s2[i]]--
        }
    }
    return true;
}
