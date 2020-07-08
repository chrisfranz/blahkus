function rotate90(piece) {

};

function flipXAxis(piece) {

};

function flipXYxis(piece) {
    return piece.reduce((acc, array) => {
        acc.push(array.reverse())
        return acc;
    }, [])
};