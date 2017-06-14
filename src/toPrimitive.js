var isObject = require('./isObject');

module.exports = function toPrimitive(x) {

    if (!isObject(x))
        return x;

    var valueOf = x.valueOf();
    if (!isObject(valueOf))
        return valueOf;

    var toString = x.toString();
    if (!isObject(toString))
        return toString;

    throw TypeError('input cannot be converted to primitive');
};
