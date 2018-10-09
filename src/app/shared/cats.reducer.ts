import { Cat } from '../shared/cats.model';
import * as catActions from './cats.actions';

let roberto  =  '../../assets/img/img_3.jpg';
let subhash = '../../assets/img/img_4.jpg';
let luis = '../../assets/img/img_5.jpg';
let gabriella = '../../img/img_6.jpg';

// this is the central store where all the cats are stored.

const cats : Cat[] = [
    { id: 1, name: 'Roberto', src: roberto , clicks: 0 },
    { id: 2, name: 'Subhash', src: subhash , clicks: 0 },
    { id: 3, name: 'Luis', src: luis , clicks: 0 },
    { id: 4, name: 'Gabriella', src: gabriella , clicks: 0 }
]

export interface State  {
    allCats     :   Cat[],
    activeCat   :   Cat
}

const initialState: State = {
    allCats     : cats,
    activeCat   :  cats[1]
}

export function catReducer(state = initialState, action) {
    switch(action) {
        case catActions.SET_ACTIVE_CAT :
            return {
                ...state,
                activeCat: cats[action.payload]
            }
    }
}
// the problem lies here on line 39 where the state is undefined
// have I made an error while setting it up?
export const getAllCats     = (state: State) => state.allCats

export const getActiveCat   = (state: State) => state.activeCat 
