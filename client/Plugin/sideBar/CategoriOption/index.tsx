import { Location } from "@/app/(root)/(user)/shop/[id]/page";
import CategoriSelect from "./CategoriSelect";
import { IPlugin, linkPath } from "@/manager/plugin/IPlugin";

export class Categori extends IPlugin {
    
    constructor () {
        super()
        this.setDes(<CategoriSelect 
            category="" 
            minx={0}
            maxx={0}
            />)
    }

    update(location: Location): void {
        this.setDes(<CategoriSelect 
            category={location.searchName} 
            minx={location.min}
            maxx={location.max}
            />)
    }

    run() {
        console.log("Categori plugin is running!");
    }
}
export const linkPathPlugin =(searchName : string, min :number |undefined, max:number|undefined) => {
    return linkPath(searchName, min, max)
}
