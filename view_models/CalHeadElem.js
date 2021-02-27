'use strict';

export default function (month){
    const tableHeadElem = document.createElement('thead');
    const tableRow = document.createElement('tr');
    const tableH = document.createElement('th');
    tableH.setAttribute('colspan', 7);
    tableH.classList.add('calMonthName');
    tableH.innerText = `${month.date.toLocaleString('ru-RU', {month: 'long'})} ${month.date.getFullYear()}`;
    tableRow.appendChild(tableH);
    tableHeadElem.appendChild(tableRow);

    const tableR = document.createElement('tr')
    tableR.classList.add('calWeekDay');
    month.weeks[0].days.forEach(day => {
        const tableHeader = document.createElement('th');
        tableHeader.innerText = `${day.date.toLocaleString('ru-RU', {weekday: 'short'})}`;
        tableR.appendChild(tableHeader);
    });
    tableHeadElem.appendChild(tableR);
}