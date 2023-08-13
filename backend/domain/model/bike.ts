import { User } from "./user"

export class Bike {
    readonly id?:number
    readonly brand:string
    readonly type:string
    readonly shifting_system:string   
    readonly userid?:number
    


    constructor(bike: {id: number, brand: string, type: string,  shifting_system:string, userid: number}){
        this.id = bike.id;

        if (bike.brand === null || bike.brand === undefined){
            throw new Error(`Brand of bike is required.`)
        }
        this.brand = bike.brand;

        if (bike.type === null || bike.type === undefined){
            throw new Error(`Type of bike is required.`)
        }
        this.type=bike.type;
       
       
        
        if(bike.shifting_system === null || bike.shifting_system ===   undefined){
            throw new Error(`Shifting system of bike is required.`)
        }
        this.shifting_system = bike.shifting_system;
        this.userid = bike.userid
    
    }

    static create({id, brand, type ,  shifting_system, userid}):Bike{
        return new Bike({ id, brand, type,  shifting_system, userid});
    }
}

