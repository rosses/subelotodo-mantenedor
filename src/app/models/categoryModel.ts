import { SubcategoryModel } from "./subcategoryModel";

export interface CategoryModel{
    id?:number;
    name:String;
    subcategories?:SubcategoryModel[];
    createdAt?:Date;
    updatedAt?:Date;
    deletedAt?:Date;
}