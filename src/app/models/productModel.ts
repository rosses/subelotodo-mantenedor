import { CategoryModel } from "./categoryModel";
import { CityModel } from "./cityModel";
import { StateModel } from "./stateModel";
import { SubcategoryModel } from "./subcategoryModel";

export interface ProductModel{
    id?:number;
    title:string;
    subcategoryId:number;
    subcategory?:SubcategoryModel;
    categoryId:number;
    category?:CategoryModel;
    userId?:number;
    height:number;
    weight:number;
    width:number;
    length:number;
    cityId:number;
    city?:CityModel;
    stateId:number;
    state?:StateModel;
    description:string;
    condition:string;
    price:number;
    referencialPrice:number;
    saleState:string; 
    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
}