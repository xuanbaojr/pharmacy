export abstract class RPlugin {
    private name : string = "rplugin"
    protected des : React.ReactNode;

    constructor  ( ) {
        
    }

    public  getName () :string {
        return `${this.name}`
    }

    public setDes (des : React.ReactNode) : void {
        this.des = des
    }

    public getDes () : React.ReactNode {
        return this.des
    }

}