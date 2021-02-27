'use strict';
function createMonthWeekElem(week){
    const tableRowElement = document.createElement('tr');
    week.days.forEach(
        day => {
            tableRowElement.appendChild(createWeekDay(day));
        }
    );
    return tableRowElement

}
function createWeekDay(day){
    const tableDateElem = document.createElement('td');
    tableDateElem.innerText = day.date.toLocaleString('ru-RU', {day: '2-digit'});
    return tableDateElem;
}

export default function(month){
    const tableBodyElem = document.createElement('tbody');
    month.weeks.array.forEach(week => {
        tableBodyElem.appendChild(createMonthWeekElem(week));
    });
    return tableBodyElem
}