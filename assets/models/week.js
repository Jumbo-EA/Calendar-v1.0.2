'use strict';

import Day from './day.js'
class Week{
    constructor(currentWeek){
        this._days = [];
        const monday = Week.getMonday(date);
        for (;;monday.setDate(monday.getDate()+1)){
            this._days.push(new Day(new Date(monday)));
            if(!monday.getDay()){
                break;
            }
        }
    }
    get days(){
        return this._days;
    }
    static getMonday(date){
        const monday = new Date(date);
        const weekDayNum = monday.getDay();
        monday.setDate(monday.getDate()-(weekDayNum ? weekDayNum -1 : 6));
        return monday;
    }
}

export default Week