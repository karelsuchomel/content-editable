const formatButtonArr = document.getElementsByClassName('format-button');

for (var i = formatButtonArr.length - 1; i >= 0; i--) {
	formatButtonArr[i].addEventListener('click', executeFormatCommand);
};

function executeFormatCommand ( btn )
{
	let button = btn.currentTarget;
	var command = button.getAttribute('data-command');

	if (command === 'createlink' || command === 'insertimage')
	{
		let url = prompt('Enter the link here: ','http:\/\/');
		document.execCommand(command, false, url);
		return 1;
	}

	document.execCommand(command, false, null);
};
