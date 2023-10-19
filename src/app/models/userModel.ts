export interface UserModel{
    id:number;
    firstName:String;
    lastName:String;
    email:String;
    password:String;
    address:String;
    stateId:number;
    cityId?:number;
    zipcode?:number;
    type:number;
    phone:number;
    birthday:Date;
    gender?:String;
    createdAt:Date;
    updatedAt:Date;
    deletedAt:Date;
}