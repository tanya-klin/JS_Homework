
// 1 задание 
function Animal(name) {
    this.name = name;
    this._foodAmount = 50;
}
Animal.prototype._formatFoodAmount = function () {
    return this._foodAmount + ' гр.';
}
Animal.prototype.dailyNorm = function (amount) {
     if (!arguments.length) return _formatFoodAmount();

        if (amount < 50 || amount > 500) {
            return 'Недопустимое количество корма.';
        }
        _foodAmount = amount;
};
Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};
function Cat(name) {
    Animal.apply(this, arguments);
}
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.feed = function () {
    Animal.prototype.feed.apply(this);
    console.log('Кот доволен ^_^');
    return this;
}
Cat.prototype.stroke = function () {
    console.log('Гладим кота.');
    return this;
}

//2задание

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};
function deepCloneObj(obj) {
    var newObject = {};
    if (Array.isArray(obj)) {
        newObject = [];
    }
    for (var i in obj) {
        if (typeof obj[i] === 'object' && obj[i] !== null) {
            newObject[i] = deepCloneObj(obj[i])
        } else {
            newObject[i] = obj[i];
        }
    }
    return newObject;
}
var clonedObj = deepClone(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
      clonedObj.array.push(2);

      console.log(initialObj);
      console.log(deepCloneObj);


//3 задание 

var object = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};
var anotherOneObject = {
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};
function isTheSame(obj1, obj2) {
    if (obj1 !== null && obj2 !== null && Object.keys(obj1).length != Object.keys(obj2).length) {
        return false;
    }

    for (var k in obj1) {
        if (obj1.hasOwnProperty(i) !== obj2.hasOwnProperty(i)) {
            return false;
        }
        if (typeof (obj1[i]) === 'object') {
            if (!isTheSame(obj1[i], obj2[i])) {
                return false;
            }
        } else if (typeof obj1[i] === 'function') {
            if (obj1[i].toString() != obj2[i].toString()) {
                return false;
            }
        } else if (obj1[i] != obj2[i]) {
            return false;
        }

    }

    return true;
}
isTheSame(object,anotherOneObject);