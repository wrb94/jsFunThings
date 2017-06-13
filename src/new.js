module.exports = function NEW(constructor, args) {
    var obj = {};
    obj['__proto__'] = constructor.prototype;

    var result = constructor.apply(obj, args);
    if (result)
        return result;
    return obj;
};
