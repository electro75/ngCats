let roberto  =  '../../assets/img/img_3.jpg';
let subhash = '../../assets/img/img_4.jpg';
let luis = '../../assets/img/img_5.jpg';
let gabriella = '../../img/img_6.jpg';

import { Cat } from './cat.model'

const cats: Cat[] = [
    { id: 1, name: 'Roberto',   src: roberto ,   clicks: 0 },
    { id: 2, name: 'Subhash',   src: subhash ,   clicks: 0 },
    { id: 3, name: 'Luis',      src: luis ,      clicks: 0 },
    { id: 4 ,name: 'Gabriella', src: gabriella , clicks: 0 }
]

const activeCat : Cat = null;

export class CatsService {
    getCats() {
        return cats.slice();
    }
}