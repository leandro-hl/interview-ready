// 7. *Rotate Matrix*:

// Given an image represented by an NxN matrix, where each pixel in the image is 4
// bytes, write a method to rotate the image by 90 degrees. Can you do this in place?

type Matrix = number[][]

function createMatrix(rows: number, columns: number, initialValue: number): Matrix {
    return Array.from({length: rows}, () =>
        Array.from({length: columns}, () => initialValue)
    )
}

export default function rotateMatrix (matrix: Matrix) {
    //each pixel is 4 bytes.
    //rotate 90 degrees
    //in place
    const isInPlace=true
    if(isInPlace) {
        //every row should become every column
        /*                   r,c   nr,nc
            [1,2,3] [1,4,7]  0,0 -> 0,0 && 0,0 -> 0,0
            [4,5,6] [2,5,8]  0,1 -> 1,0 && 1,0 -> 0,1
            [7,8,9] [3,6,9]  0,2 -> 2,0 && 2,0 -> 0,2
         */
        for(let row=0;row<matrix.length;row++) {
            for(let column=row;column<matrix.length;column++) {
                const aux=matrix[row][column]
                matrix[row][column]=matrix[column][row]
                matrix[column][row]=aux
            }
        }
        //now reverse every row
        /*
                     r,c   nr,nc
            [1,4,7]  0,0 -> 0,2 && 0,2 -> 0,0
            [2,5,8]  0,1 -> 0,1 && 0,1 -> 0,1
            [3,6,9]  0,2 -> 0,0 && 0,0 -> 0,2
         */
        for(let row=0;row<matrix.length;row++) {
            for(let column=0;column<Math.floor(matrix.length/2);column++) {
                const oppositeColumnIndex=matrix.length-column-1
                const aux=matrix[row][column]
                matrix[row][column]=matrix[row][oppositeColumnIndex]
                matrix[row][oppositeColumnIndex]=aux
            }
        }
    } else {
        const newMatrix: Matrix=createMatrix(matrix.length, matrix.length, 0)
        for(let row=0;row<matrix.length;row++) {
            for(let column=0;column<matrix.length;column++) {
                const newRow = column
                const newColumn = matrix.length-1-row

                /* length=2
                        r,c   nr,nc| r,c   nr,nc| r,c   nr,nc
                        0,0 -> 0,2 | 1,0 -> 0,1 | 2,0 -> 0,0
                        0,1 -> 1,2 | 1,1 -> 1,1 | 2,1 -> 1,0
                        0,2 -> 2,2 | 1,2 -> 2,1 | 2,2 -> 2,0

                        [1,2,3] [7,4,1] [0,7,4]
                        [4,5,6] [8,5,2] [0,8,5]
                        [7,8,9] [9,6,3] [0,9,6]

                     */
                newMatrix[newRow][newColumn]=matrix[row][column]
            }
        }

        //copy matrices
        for(let row=0;row<matrix.length;row++) {
            for(let column=0; column<matrix.length;column++) {
                matrix[row][column]=newMatrix[row][column]
            }
        }
    }
}