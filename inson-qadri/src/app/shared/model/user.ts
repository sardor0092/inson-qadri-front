import { Lavozim } from "./Lavozim";


export interface User{
    id: number;
    name:string;
    surname:string;
    fatherName:string;
    phone:string;
    territory:number;
    password:string;
    lavozimlar: Array<Lavozim>;

    
 
}