import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }


  PostCall(data:Object){
    return this.http.post('http://localhost:3000/api/contact',data);
  }
  GetCall(){
    return this.http.get('http://localhost:3000/api/contacts');
  }
  deleteCall(id:String){
    return this.http.delete('http://localhost:3000/api/contact/'+id);
  }
}
