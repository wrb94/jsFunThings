module.exports = function eq(x, y) {
    if (typeof x === typeof y) {
        if ((x === null || typeof x === 'undefined') &&
            (y === null || typeof y === 'undefined')) {

        }
        return false;
    }
    return false;
};