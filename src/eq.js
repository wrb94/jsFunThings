module.exports = function eq(x, y) {
    if (typeof x === typeof y) {
        if ((x === null || typeof x === 'undefined') &&
            (y === null || typeof y === 'undefined')) {
            if ((typeof x === Number && typeof y === string && x === Number(y)) ||
                (typeof x === Number && typeof y === string && x === Number(y))) {
                return true;
            }
        }
        return false;
    }
    return false;
};