// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2b1c5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

export default function stringCompression (str: string) : string {
    const compressed: string[] = []
    const insert = (char: string, count: number)=>  {
        compressed.push(char)
        compressed.push(count.toString(10))
    }
    let last=str[0]
    let count=1
    for(let i=1;i<str.length;i++) {
        if(str[i]!==last) {
            insert(last, count)
            last=str[i]
            count=1
        } else {
            count++
        }
    }
    insert(last, count)

    return str.length<compressed.length? str : compressed.join('')
}