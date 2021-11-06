 //Слева - направо - вниз - влево - вверх спираль матрицы
 
const width = 10;
const height = 10;

function matrix(w, h) {//высота   заполнить       ширина
    let result = new Array(h).fill().map(() => new Array(w).fill(""));
    let counter = 1;

    let startCol = 0;         //width
    let endCol = width - 1;

    let startRow = 0;         //height
    let endRow = height - 1;

    while (startCol <= endCol && startRow <= endRow) {//to right
        for (let i = startCol; i <= endCol; i++) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let j = startRow; j <= endRow; j++) { //to bottom
            result[j][endCol] = counter;
            counter++;
        }
        endCol--;

        for (let i = endCol; i >= startCol; i--) { //to left
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (let j = endRow; j >= startRow; j--) {  //to up
            result[j][startCol] = counter;
            counter++;
        }
        startCol++;
        
    }
    
    return result;
}

//console.log(matrix(width, height)); 



// справа - налево - вниз - вправо - вверхспираль матрицы реверсивная
const widthTwo = 5;
const heightTwo = 5;

function matrixx(w, h) {//высота   заполнить       ширина
    let result = new Array(h).fill().map(() => new Array(w).fill(""));
    console.log(result);
    let counter = 1;

    let startCol = width - 1;         //width
    let endCol = 0;

    let startRow = 0;         //height
    let endRow = height - 1;

    while (endCol <= startCol && endRow >= startRow) {//to left
        for (let i = startCol; i >= endCol; i--) {
            result[startRow][i] = counter;
            counter++;
        }
        startRow++;

        for (let j = startRow; j <= endRow; j++) { //to bottom
            result[j][endCol] = counter;
            counter++;
        }
        endCol++;

        for (let i = endCol; i <= startCol; i++) { //to right
            result[endRow][i] = counter;
            counter++;
        }
        endRow--;

        for (let j = endRow; j >= startRow; j--) {  //to up
            result[j][startCol] = counter;
            counter++;
        }
        startCol--;
        
    }
    
    return result;
}

//console.log(matrixx(widthTwo, heightTwo));