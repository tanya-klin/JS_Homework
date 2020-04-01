var container = document.getElementById('container');
var button = document.getElementsByTagName('button')[0];

var first = document.createElement('p'),
		second = document.createElement('p');

first.innerHTML = 'hello,world! <a href="#">lol</a>  <a href="#">kek</a>';
second.innerHTML = 'hello,world! <a href="https://yandex.by/" >che</a> <a href="https://www.google.com/" >bu</a> <a href="#" >rek</a>';

container.appendChild(first);
container.appendChild(second);

var links1 = first.querySelectorAll('a');

button.onclick = function() {
    links1.forEach(function(item, i) {
        links1[i].classList.toggle('changed');
    });
}

var links2 = second.querySelectorAll('a');

links2.forEach(function(item, j) {
    links2[j].addEventListener('click', function() {
        event.preventDefault();
        alert(links2[j].getAttribute('href'));
    });
});
