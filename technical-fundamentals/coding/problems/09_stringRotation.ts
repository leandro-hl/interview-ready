// 9. *String Rotation*;

import { isSubstring } from "./__utils__/strings"

// Assume you have a method isSubstring which checks if one word is a substring of another.
// Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring.
// [e.g., "waterbottle" is a rotation of 'erbottlewat")

export default function stringRotation(s1: string, s2: string): boolean {
    /*
        s1 and s2 are always the same length
        waterbottle //as many rotations as letters the word has
            ewaterbottl+ewaterbottl
            lewaterbott
            tlewaterbot
            ttlewaterbo
            ottlewaterb
            bottlewater
            rbottlewate
            erbottlewat
            terbottlewa
            aterbottlew
            waterbottle

         given a circular queue can I get to the same value of s1?
     */

    return isSubstring(s1+s1,s2)
}
