import { Location } from "@/app/(root)/(user)/shop/[id]/page";

export abstract class IPlugin {
    private name : string = "iPlugin" ;
    protected des : React.ReactNode;

    protected location : Location;

    constructor  ( ) {
        this.location = {}
    }

    public  getName () :string {
        return `${this.name}`
    }

    public setLocation (location : Location) {
        this.location = location
    }

    public setDes (des : React.ReactNode) : void {
        this.des = des
    }

    public getDes () : React.ReactNode {

        return this.des
    }
    abstract update (location : Location): void
    abstract run(): void; // Phương thức trừu tượng mà các plugin sẽ triển khai

    
}
export const linkPath = (
    searchName? : string ,
     min? : number, 
     max? : number , 
    ) : string=> {
        const user : Location = {
            searchName : searchName,
            min : min,
            max : max,
            page : 1
        }
        const userString = encodeURIComponent(JSON.stringify(user));
    return userString;

}