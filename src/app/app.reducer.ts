import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCats from './shared/cats.reducer';

export interface State {
    cat     :   fromCats.State
}

export const reducers   :   ActionReducerMap<State> = {
    cat : fromCats.catReducer
}

export const getCatState = createFeatureSelector<fromCats.State>('cat')

export const getAllCats     = createSelector(getCatState, fromCats.getAllCats) 
export const getActiveCat   = createSelector(getCatState, fromCats.getActiveCat)