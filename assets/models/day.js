class Day{
    constructor(currentDay){
        this._currentDay = currentDay;
        this._isCurrent = Day.isCurrent;
    }
    get currentDay(){
        return this._currentDay
    }
    get currentDay(newCurrentDay){
        this._currentDay = newCurrentDay;
        this._isCurrent = Day.isCurrent(newCurrentDay);
    }
    static isCurrent(currentDay){
        if(currentDay.toCurrentDayString() == Day.currentDay.toCurrentDayString()) return true;
        return false;
    }
    get isCurrent(){
        return this._isCurrent;
    }

    static date = new Date();
}