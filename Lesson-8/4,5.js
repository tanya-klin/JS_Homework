function Animal(name) {
    var foodAmount = 50;
    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }
    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();
        if (amount < 50 || amount > 500) {
           return 'Недопустимое количество корма.';
        }
        foodAmount = amount;
    };
    this.name = name;
    this.feed = function() {
        console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
    };
}
function Cat(name) {
    Animal.call(this);
    var animalFeed = this.feed;
    this.animalfeed = function () {
        animalFeed.call(this);
        console.log('Кот доволен ^_^');
        return this;
    }

    this.stroke = function() {
        console.log('Гладим кота.');
        return this;
    }
}

var cat = new Cat('Solli');
cat.stroke().feed();