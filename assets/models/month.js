'use strict';

import Week from './week.js';
import week from './week.js';

class Month{
    constructor(currentMonth){
        this._weeks = [];
        this._currentMonth = currentMonth;
        const Monday = week.getMonday(new Date(this.date.getFullYear(), this.date.getMonth(), 1));
        do{
            this._weeks.push(new Week(new Date(nextMonday)));
            nextMonday.setDate(nextMonday.getDate() + 7);
        }while(nextMonday.getMonth() == this.currentMonth.getMonth());
    }
    get currentMonth(){
        return this._currentMonth;
    }
    get weeks(){
        return this._weeks;
    }
}