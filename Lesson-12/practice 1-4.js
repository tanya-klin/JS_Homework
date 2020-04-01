// 1

function createObj(names) {
    return names.map(function (names) {
        return { name:names };
    });
}

obj(['Tanya','Anya','Kate']);

// 2

var arr = ['00', '13', '24'];

function getTime(value) {
    return value.reduce(function (string, value) {
        return string + ' : ' + value;
    }, 'Текущее время');
}

getTime(arr);

// 3

function howMuchVowel(string) {
    var vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];

    var sentence = string.toLowerCase().split('');

    var countVowels = sentence.reduce(function(a,b) {
        if (a.indexOf (value) != -1) {
            a++;
        }
        a;
    }, 0);
    return countVowels;
}

howMuchVowel('Эти привычки могут привести к неожиданному поведению программы.');

//4

function countLetters(string) {
    var newSentences = string.split(/[\.\!\?]/);

    var filteredArrOfSentences = arrOfSentences.filter(function(elem) {
        return elem;
    });
