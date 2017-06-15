var showingTooltip;

document.onmouseover = function(e) {
    var target = e.target;

    var tooltip = target.getAttribute('data-tooltip');
    if (!tooltip) return;

    var tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltip;
    document.body.appendChild(tooltipElem);

    var coords = target.getBoundingClientRect();

    var left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0; // не вылезать за левую границу окна

    var top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) { // не вылезать за верхнюю границу окна
        top = coords.top + target.offsetHeight + 5;
    }

    tooltipElem.style.left = left + 'px';
    tooltipElem.style.top = top + 'px';

    showingTooltip = tooltipElem;
};

document.onmouseout = function(e) {

    if (showingTooltip) {
        document.body.removeChild(showingTooltip);
        showingTooltip = null;
    }

};

var achievements_count = 1;

function openAchievement(i, j) {
    var firstRow=document.getElementById('table').rows[i];
    var x=firstRow.cells[j];
    x.innerHTML='<img src="img/open.png"  data-tooltip="\'' + achievements_count + '\'"/>';
    ++achievements_count;
}

function displayResult(i, j)
{
    var firstRow=document.getElementById('table').rows[i];
    var x=firstRow.insertCell(-1);
    x.innerHTML='<img src="img/close.png" onClick="openAchievement(\'' + i + '\', \'' + j + '\')" />';
}

function f(x){
    return Math.pow(x, 4) + Math.pow(x, 3) + 2 * x;
}