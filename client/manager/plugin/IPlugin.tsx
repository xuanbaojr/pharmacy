export abstract class IPlugin {
    private name : string = "iPlugin" ;
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
    abstract run(): void; // Phương thức trừu tượng mà các plugin sẽ triển khai
}