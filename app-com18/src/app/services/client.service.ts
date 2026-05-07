import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client, login, Register} from '../model/interface/class/Client';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }
   

  getAllEmp(){
    return this.http.get(environment.API_URL + "allEmp")
  }

  addEmp(obj:Client){
    return this.http.post(environment.API_URL + "single",obj)
  }

  deleteEmp(id: number){
    return this.http.delete(environment.API_URL + "delete/"+id)
  }

  updateEmp(id:number,obj:Client){
    return this.http.put(environment.API_URL + "update/"+id,obj)
  }
  getEmpById(id: number) {
    return this.http.get(environment.API_URL +"getEmpById/" +id);
  }
  login(loginObj:login){
    return this.http.post(environment.APT_URL_LOGIN +"auth/login",loginObj,{
      responseType: 'text' as 'json'
    })
  }

  register(registerObj:Register){
    return this.http.post(environment.APT_URL_LOGIN +"auth/register",registerObj)
  }
}
