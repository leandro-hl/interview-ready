// 3.  URLify:

// Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters,
// and that you are given the "true" length of the string.

export default function URLify (s1 : string): string {
    //[i, ,s, ,n,i,g,h,t]
    //     *         *
    //[i,%,2,0,s,%,2,0,n,i,g,h,t]
    //in place moving characters (is like an insertion)

    //create an array that has same length plus the 4 characters
    //move all two to the end until I find a %
    //from % up to two add 20

    //[ab c,x,x] count spaces. For each add 2 more elements to the array.
    let count = 0
    for(let i=0;i<s1.length;i++) {
        if(s1[i]===' ') {
            count++
            s1+='XX'
        }
    }

    let countPointer = s1.length-1
    let stringPointer = s1.length-1-(count*2)
    //[a,b,%,2,0,c] ^=length-count
    //   ^*

    //TS2542: Index signature in type String only permits reading.
    const s1Arr = s1.split('')
    while(count>0) {
        if(s1Arr[stringPointer]!==' ') {
            s1Arr[countPointer]=s1Arr[stringPointer]
            countPointer--
        } else {
            s1Arr[countPointer]='0'
            s1Arr[countPointer-1]='2'
            s1Arr[countPointer-2]='%'
            countPointer-=3
            count--
        }
        stringPointer--
    }

    return s1Arr.join('')
}