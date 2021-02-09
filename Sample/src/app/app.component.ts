import { Component } from '@angular/core';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstname:String;
  lastname: String;
  phonenumber:String;
  UsersData: Array<String>;
  list1="Enter the form field and hit the 'Add Me' button to store the record the MongoDB";
  list2="Click on 'Get Users to get the list of stored records in MongoDB'";
  list3="Each rec has a column to deleted the delete, which remove's from the Database"
  constructor(private contactService:ContactService) { }

  addMe(){
    let json = {
      "first_name":this.firstname,
      "last_name":this.lastname,
      "phone":this.phonenumber
    }
    this.contactService.PostCall(json).subscribe((response)=>{
      console.log(response);
      this.getUsers();
    });
    document.forms['formID'].reset()
  }
  getUsers(){
    this.contactService.GetCall().subscribe((response:Array<String>) =>{
      this.UsersData = response;
    })
  }
  deleteUser(id:String){
    this.contactService.deleteCall(id).subscribe((response:any)=>{
      this.getUsers();
    });
  }
}
