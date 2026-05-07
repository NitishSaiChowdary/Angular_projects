import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})

export class RolesComponent implements OnInit {
roleList:IRole[]=[];
isLoader:boolean=true;
http=inject(HttpClient);

  ngOnInit(): void {
   this.getAllRoles()
  }

  getAllRoles(){
    this.http.get("http://localhost:8089/api/allEmp").subscribe((res:any)=>{
      this.roleList =res;
      this.isLoader=false;
    })
    
  }























  // firstName: string ="Angular";
  // version: number=18;
  // isActive :boolean = false;
  // currentDate : Date =new Date();
  // inputType:string="button";
  // selectedState:string ='';

  // showWelcomeAlert(){
  //   alert('Welcome to Angular 18')
  // }

  // showMessage(message:string){
  //   alert(message)
  // }
}
