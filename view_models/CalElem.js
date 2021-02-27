'use strict';

import CalHeadElem from './CalHeadElem.js';

import CalBodyElem from './CalBodyElem.js';

export default function(month){
    const calTableElem = document.createElement("table");
    calTableElem.appendChild(CalHeadElem(month));
    calTableElem.appendChild(CalBodyElem(month));
    return calTableElem;
}