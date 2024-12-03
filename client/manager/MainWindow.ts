
import { Location } from "@/app/(root)/(user)/shop/[id]/page";
import { IPlugin } from "./plugin/IPlugin";
import { RPlugin } from "./plugin/RPlugin";


export class MainWindow {
    private sideBar : IPlugin[];
    private rightBar : RPlugin[];
    // private topBar : IPlugin[]

    constructor (sideBar : IPlugin[], rightBar : RPlugin[]) {
        this.sideBar = sideBar
        this.rightBar = rightBar

    }

    public updateParams (location : Location) {
        this.sideBar.map((item) => item.update(location))
    }

    public loadPlugin (sideBar : IPlugin[], rightBar : RPlugin[] ) : void {
        this.setSideBar(sideBar)
        this.setRightBar(rightBar)
    }

    public setSideBar (sideBar : IPlugin[]) : void {
        this.sideBar = sideBar
        console.log("sidebar done")
    }

    public setRightBar (rightbar : RPlugin[]) : void {
        this.rightBar = rightbar
        console.log("rightbar done")
    }

    public getIPlugin (name : string) : IPlugin {
        const plugin = this.sideBar.filter((item) => item.getName() === name)
        return plugin[0]
    }


    public getSideBar () : IPlugin[] {
        return this.sideBar
    }
    public getRightBar () : RPlugin[] {
        return this.rightBar;
    }

    public getLenght () : number {
        return this.sideBar.length
    }
    public getLeR () : number {
        return this.rightBar.length
    }




}
