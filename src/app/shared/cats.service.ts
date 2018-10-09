let roberto  =  'assets/img/img_3.jpg';
let subhash = 'assets/img/img_4.jpg';
let luis = 'assets/img/img_5.jpg';
let gabriella = 'assets/img/img_6.jpg';

import { Cat } from './cat.model'
import { Subject } from 'rxjs';

const cats: Cat[] = [
    { id: 0, name: 'Roberto',   src: roberto ,   clicks: 0 },
    { id: 1, name: 'Subhash',   src: subhash ,   clicks: 0 },
    { id: 2, name: 'Luis',      src: luis ,      clicks: 0 },
    { id: 3 ,name: 'Gabriella', src: gabriella , clicks: 0 }
]

const activeCat : Cat = null;



export class CatsService {

    public activeCatSub = new Subject<Cat>();

    getCats() {
        return cats.slice();
    }

    getActiveCat(cat_id) {
        this.activeCatSub.next(cats[cat_id]);
    }
}