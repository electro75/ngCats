import { Action } from '@ngrx/store';

export const SET_ACTIVE_CAT: string     =   '[CAT] Set Active Cat';
export const INC_CAT_CLICKS: string     =   '[CAT Increase Cat Clicks';    


export class SetActiveCat implements Action { 
    readonly type = SET_ACTIVE_CAT;

    constructor(public payload: number) { }
}

export class IncCatClicks implements Action {
    readonly type = INC_CAT_CLICKS;

    constructor(public payload: number) { }
}

export type CatActions =    SetActiveCat | IncCatClicks;
