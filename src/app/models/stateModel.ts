import { CityModel } from "./cityModel";

export interface StateModel{
    id?:number;
    name:String;
    cities?:CityModel[];
    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
}