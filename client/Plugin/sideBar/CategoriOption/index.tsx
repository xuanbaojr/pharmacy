import CategoriSelect from "./CategoriSelect";
import { IPlugin } from "@/manager/plugin/IPlugin";

export class Categori extends IPlugin {
    
    constructor () {
        super()
        this.setDes(<CategoriSelect value="" />)
    }

    run() {
        console.log("Categori plugin is running!");
    }
}

