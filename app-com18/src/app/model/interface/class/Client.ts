export class Client{
    id:number;
    firstName:string;
    lastName: string;
    email:string ;
    mobileNo:number;

    constructor(){
        this.id=0;
        this.firstName="";
        this.lastName="";
        this.email="";
        this.mobileNo=0;
    }
}

export class login{
    username: string;
    password:string;


    constructor(){
        this.username="";
        this.password="";
    }
}

export class Register{
    username: string ;
    password:string;
    

    constructor(){
        this.username="";
        this.password="";
    }

}