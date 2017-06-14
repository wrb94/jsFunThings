var toPrimitive = require('./toPrimitive');

module.exports = function eq(x, y) {

    if (typeof x === typeof y)
        return x === y;

    if ((x === null) && (y === undefined))
        return true;

    if ((y === null) && (x === undefined))
        return true;

    if ((typeof x === 'number') && (typeof y === 'string'))
        return x == Number(y);

    if ((typeof x === 'string') && (typeof y === 'number'))
        return y == Number(x);

    if (typeof x === 'boolean')
        return Number(x) == y;

    if (typeof y === 'boolean')
        return Number(y) == x;

    if ((typeof x === 'string' || 'number' || 'symbol') && (typeof y === 'object'))
        return x == toPrimitive(y);

    if ((typeof y === 'string' || 'number' || 'symbol') && (typeof x === 'object'))
        return y == toPrimitive(x);

    return false;
};
