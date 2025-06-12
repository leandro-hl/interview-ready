// 8. *Zero Matrix*:

// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

type Matrix = number[][]

export default function zeroMatrix (matrix: Matrix) {
    /*
        [1,2,0,3]  [0,0,0,0] 0,2 -> 0,0 | 0,1 | 0,2 | 0,3 | 1,2 | 2,2 (total elements are NxM)
        [1,1,1,1]  [1,1,0,1]
        [1,2,2,2]  [1,2,0,2]

        -> any in the same column or any in the same row should be 0
        -> I can store all rows that should be zero if it is not already there
        -> I can store all columns that should be zero if it is not already there

        - Look for zeros.
            - found:
                - is a modified one? skip
                - else
                    - for each column=0 ++ in the same current row write zero
                    - for each row=0 ++ in the same current column write zero
                    - if it was zero already, don't add it to the store
                    - for both cases store each row-column pair to know which places where modified
     */

    //row, column store
    const modified: {[key: string]: boolean}={}
    const keyGen = (row:number, column:number): string => {
        return `${row}${column}`
    }

    const m=matrix.length
    const n= matrix[0].length
    for(let row=0;row<m;row++) {
        for(let column=0;column<n;column++) {
            if(matrix[row][column]===0) {
                const modKey = keyGen(row,column)
                if(modified[modKey]) {
                    continue
                }

                for(let c=0; c<n;c++) {
                    if(matrix[row][c]!==0) {
                        modified[keyGen(row,c)]=true
                    }
                    matrix[row][c]=0
                }
                for(let r=0;r<m;r++) {
                    if(matrix[r][column]!==0) {
                        modified[keyGen(r,column)]=true
                    }
                    matrix[r][column]=0
                }
            }
        }
    }
}