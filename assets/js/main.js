const editorEl = document.getElementById('simple-editor-content');
const codeEl = document.getElementById('innerHtml-container');

document.getElementById('show-innerHTML').addEventListener("click", function () {
	codeEl.innerText = editorEl.innerHTML;
	console.log('gogogo');
	return 1;
});