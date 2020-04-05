var button = document.getElementById('button');
var container = document.getElementsByClassName('container')[0];

button.addEventListener('click', createChess);

function createChess(evnt) {
	var valueX = document.getElementById('x').value;
	var valueY = document.getElementById('y').value;
	var lastElem = container.lastElementChild;
	if (lastElem.classList.contains('black')) {
		lastElem.remove();
	}
	if(isFinite(valueX) && valueX !== '' && isFinite(valueY) && valueY !== '') {
		if ((valueX > 0 && valueY < 11) && (valueY > 0 && valueY < 11)){
			for (i = 0; i < valueX ; i++){
				var tr = document.createElement('tr');
				container.appendChild(tr);
				for (j = 0; j < valueY; j++){
					var td = document.createElement('td');
					if (i%2 !== j%2) {
						td.classList.add('block');
					} else {
						td.classList.add('black')
					}
					tr.appendChild(td);
				}
			}
		}
		else {
			alert('Введите число от 1 до 10');
			button.setAttribute('disabled','disabled');

		}
	}
	else{
		button.setAttribute('disabled','disabled');
		alert('Данные должны быть числами');
	}
	container.addEventListener('click',changeColor);
	function changeColor(evnt) {
		var arrOfTd = document.getElementsByTagName('td');
		arrOfTd = Array.prototype.slice.call(arrOfTd);
		for (k = 0 ; k < arrOfTd.length; k++){
			arrOfTd[k].classList.toggle('black');
		}
	}
}