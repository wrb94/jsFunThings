module.exports = function eq(x, y) {
    if (typeof x === typeof y)
        return true;

    if (x === null && y === undefined)
        return true;

    if (x === undefined && y === null)
        return true;
};