var container = document.getElementById('container');
var button = document.getElementsByTagName('button')[0];

var first = document.createElement('p'),
		second = document.createElement('p');

first.innerHTML = 'hello,world! <a href="#">lol</a>  <a href="#">kek</a>';
second.innerHTML = 'hello,world! <a href="https://yandex.by/" >che</a> <a href="https://www.google.com/" >bu</a> <a href="#" >rek</a>';

container.appendChild(first);
container.appendChild(second);

var links1 = first.children;
links1 = Array.prototype.slice.call(links1);

button.onclick = function() {
    links1.forEach(function(item, i) {
        links1[i].classList.toggle('changed');
    });
}

var links2 = second.children;
links2 = Array.prototype.slice.call(links2);

links2.forEach(function(item, j) {
    links2[j].addEventListener('click', function(evnt) {
        event.preventDefault();
        alert(links2[j].getAttribute('href'));
        var json = JSON.stringify()
        localStorage.setItem(links2[j].innerHTML, JSON.stringify({path: links2[j].getAttribute('href')}));
    });
});
document.body.onload = function() {
    localStorage.clear();
}
