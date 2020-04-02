var table = document.getElementById('table');
var button = document.getElementById('buttons');
var td =document.getElementsByTagName('td');

button.addEventListener('click',addRow);

function addRow(evt){
	var newRow = document.createElement('tr');
		newRow.innerHTML='<tr><td class="for-input"></td><td class="for-input"></td><td class="for-input"></td></tr>';
		table.prepend(newRow);
}

table.addEventListener('click',addInput);

function addInput(evnt) {
	var target = event.target;

	if (target.className = 'for-input' && target.id !='buttons'){
		var input = document.createElement('input');
		input.value = target.innerHTML;
		target.innerHTML = '';
		target.appendChild(input);
		input.focus();

		input.addEventListener('blur', function() {
				target.innerHTML = this.value;
				table.addEventListener('click', addInput);
		});
		table.removeEventListener('click', addInput);
	}
	else if(target.className != 'for-input' && target.id != 'buttons'){
		var context = target.innerHTML;
		target.innerHTML = '';
		var input = document.createElement('input');
		target.appendChild(input);
		input.focus();
		input.value = context;
	}
}
