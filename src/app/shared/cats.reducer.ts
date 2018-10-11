import { Cat } from '../shared/cats.model';
import { CatActions, SET_ACTIVE_CAT, INC_CAT_CLICKS } from './cats.actions';

let roberto  =  '../../assets/img/img_3.jpg';
let subhash = '../../assets/img/img_4.jpg';
let luis = '../../assets/img/img_5.jpg';
let gabriella = '../../assets/img/img_6.jpg';

// this is the central store where all the cats are stored.

const cats : Cat[] = [
    { id: 0, name: 'Roberto', src: roberto , clicks: 0 },
    { id: 1, name: 'Subhash', src: subhash , clicks: 0 },
    { id: 2, name: 'Luis', src: luis , clicks: 0 },
    { id: 3, name: 'Gabriella', src: gabriella , clicks: 0 }
]

export interface State  {
    allCats     :   Cat[],
    activeCat   :   Cat
}

const initialState: State = {
    allCats     : cats,
    activeCat   :  cats[0]
}

export function catReducer(state = initialState, action: CatActions) {
    switch(action.type) {
        case SET_ACTIVE_CAT :
            return {
                ...state,
                activeCat: cats[action.payload]
            }

        case INC_CAT_CLICKS :
            state.activeCat.clicks ++;
            return {
                ...state,
            }

        default:
            return state
    }
}
export const getAllCats     = (state: State) => state.allCats

export const getActiveCat   = (state: State) => state.activeCat 
