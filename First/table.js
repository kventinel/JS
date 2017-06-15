var tableObj = document.createElement('table');
tableObj.id = "table";
tableObj.style.width = '100%';
var tableHTML = '';
for (var i = 1; i <= 10; i++){
    tableHTML += '<tr></tr>';
}

tableObj.innerHTML = tableHTML;
document.body.appendChild(tableObj);

for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; ++j) {
        displayResult(i, j);
    }
}