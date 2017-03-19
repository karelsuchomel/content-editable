const editorEl = document.getElementById('simple-editor-content');
const showCodeEl = document.getElementById('innerHtml-container');

document.getElementById('show-innerHTML').addEventListener("click", function () {
	showCodeEl.innerText = editorEl.innerHTML;
	console.log('show html inside contenteditable element');
	return 1;
});
