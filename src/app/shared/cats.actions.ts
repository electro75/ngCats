import { Action } from '@ngrx/store';

export const SET_ACTIVE_CAT: string    =   '[CAT] Set Active Cat';


export class SetActiveCat implements Action { 
    readonly type = SET_ACTIVE_CAT;

    constructor(public payload: number) { }
}

export type CatActions =    SetActiveCat;
