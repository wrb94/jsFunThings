module.exports = function toPrimitive(x) {
    if (!isObject(x))
        return x;
    else if (!isObject(x.valueOf())) {
        return toPrimitive(x.valueOf());
    }
    else if (!isObject(x.toString()))
        return toPrimitive(x.toString());
    else
        throw TypeError('input cannot be converted to primitive');
};

function isObject(value) {
    return (value !== null) &&
        ((typeof value === 'object') ||
            (typeof value === 'function'));
}