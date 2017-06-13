// TODO: fill in missing code gaps

function Programmer1() {
    this.languages = [];
}

Programmer1.prototype.learnNewLanguage = function (language) {
    this.languages.push(language);
}

Programmer1.prototype.isPragmatic = function (language) {
    return this.languages.length > 2;
}

class Programmer2 {
    constructor() {
        this.languages = [];
    }

    learnNewLanguage(language) {
        this.languages.push(language);
    }

    isPragmatic() {
        return this.languages.length > 2;
    }
}

var Programmer3 = {
    _languages: [],
    init: function () {
        this._languages = [];
    },
    learnNewLanguage: function (language) {
        this._languages.push(language);
    },
    isPragmatic: function () {
        return this._languages.length > 2;
    }
};

function createProgrammer() {
    var _languages = [];

    return {
        learnNewLanguage: function (language) {
            _languages.push(language);
        },
        isPragmatic: function () {
            return _languages.length > 2;
        }
    }
}

module.exports = {
    Programmer1, Programmer2, Programmer3, createProgrammer
};