import { Action } from '@ngrx/store';
import { Cat } from '../shared/cats.model';

export const SET_ACTIVE_CAT    =   '[CAT] Set Active Cat';


export class SetActiveCat implements Action { 
    readonly type = SET_ACTIVE_CAT;

    constructor(public payload: number) { }
}

export type catActions =    SetActiveCat;
