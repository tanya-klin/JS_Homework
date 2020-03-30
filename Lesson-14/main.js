var table = document.getElementById('table');
var button = document.getElementById('button');

button.onclick = addRow;

function addRow(evt){
	var newRow = document.createElement('tr');
	newRow.innerHTML='<td></td><td></td><td></td>';
	table.prepend(newRow);
}

var td = document.getElementsByTagName('td');
td.onclick = addInput;

function addInput(evnt) {
	var input = document.createElement('input');
	td.innerHTML= 'input';
}
