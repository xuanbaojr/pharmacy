import { Location } from '@/app/(root)/(user)/shop/[id]/page';
import PriceSelect from './PriceSelect';
import { IPlugin, linkPath } from '@/manager/plugin/IPlugin';

export class Price extends IPlugin {

    constructor () {
        super ()
        this.setDes(<PriceSelect category={''} minx={0} maxx={0} />) 
    }

    update(location: Location): void {
        this.setDes(<PriceSelect category={location.searchName} minx={location.min} maxx={location.max} />)
    }
    run() {
        console.log("Price plugin select is running!");
    }
}

export const linkPathPlugin =(category:string | undefined ,min : number, max: number) => {
    return linkPath(category ,min, max)
}
