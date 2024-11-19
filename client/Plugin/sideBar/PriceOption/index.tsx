import PriceSelect from './PriceSelect';
import { IPlugin } from '@/manager/plugin/IPlugin';

export class Price extends IPlugin {

    constructor () {
        super ()
        this.setDes(<PriceSelect value='' />) 
    }
    run() {
        console.log("Price plugin select is running!");
    }
}