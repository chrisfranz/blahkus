function rotate90DegreesRight(piece) {
    const output = [];
    
    const initialYValue = piece.length - 1;
    let x = 0;
    let y = initialYValue;

    let newSubArray = [];
    while (x < piece[0].length) {
        while (y >= 0) {
            newSubArray.push(piece[y][x])
            y--
        }
        output.push(newSubArray);
        newSubArray = [];
        y = initialYValue;
        x++
    }
    return output;
};

function rotate90DegreesLeft(piece) {
    const output = [];

    let x = piece[0].length - 1;
    let y = 0;

    let newSubArray = [];
    while (x >= 0) {
        while (y < piece.length) {
            newSubArray.push(piece[y][x])
            y++
        }
        output.push(newSubArray);
        newSubArray = [];
        y = 0;
        x--;
    }
    return output;
};

function flipXAxis(piece) {
    return piece.reverse();
};

function flipXYxis(piece) {
    return piece.reduce((output, array) => {
        output.push(array.reverse())
        return output;
    }, [])
};