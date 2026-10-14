


export type BookingRuleCode = 
| 'INVALID_TIME'  
| 'INVALID_BOUNDRY'
| 'INVALID_DURATION'
| 'OUTSIDE_BUISNESS_HOURS'
| 'BOOKING_IN_PAST';


export interface BookingRuleErorr {
    code : BookingRuleCode;
    message :string
}


const MIN_DURATION_MS = 15*60*1000;
const MAX_DURATION_MS = 4*60*60*1000;

function isValidDate(value:string):boolean{

    const date = new Date(value);
    return Number.isFinite(date.getTime()) && date.toISOString

    return true
}

