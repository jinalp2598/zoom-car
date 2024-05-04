import { Component } from '@angular/core';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zcar';
  isModalVisible: boolean = false;
  isLoginModalVisible: boolean = false;

  registerobj: any ={
    "userId":0,
    "name":"",
    "userRole":"",
    "emailId":"",
    "mobileNo":"",
    "Password":"",
    "createdOn":new Date(),
  }
  
  loginobj: any ={
    "userId":0,
    "name":"jinal",
    "userRole":"patel",
    "emailId":"",
    "mobileNo":"9574756101",
    "Password":"",
    "createdOn":new Date(),
  }

  loggedobj: any;
  constructor(private service:CarService){
    // it is for to check whether user is loggedin or not
    const local = localStorage.getItem('zoomUser');
    if(local != null){
      this.loggedobj = JSON.parse(local);
    }
  }

// it is for modal(popup)
  openRegister() {
    this.isModalVisible = true;
  }
  closeModal() {
    this.isModalVisible = false;
  }
  onRegister(){
    debugger;
    this.service.registerUser(this.registerobj).subscribe((res:any)=>{
      if(res.result){
        alert('registration success')
        this.closeModal();
        // this.loginobj = res.data;
        this.loggedobj = res.data;
        console.log(res);
      }else{
        alert(res.message)
      }
    })
  }


  // it is for login popup
  openLogin(){
    this.isLoginModalVisible = true;
  }
  LogincloseModal() {
    this.isLoginModalVisible = false;
  }
  onLogin(){
    this.service.loginUser(this.loginobj).subscribe((res:any)=>{
      if(res.result){
        alert('login success');
        // this is for storing login data in localstorage
        localStorage.setItem('zoomUser',JSON.stringify(res.data))
        this.loggedobj = res.data;
        this.LogincloseModal();
        console.log(res);
      }else{
        alert(res.message)
      }
    })
  }
// it will remove the data from local storage
  Logout(){
    localStorage.removeItem('zoomUser');
    this.loggedobj = undefined;
  }
  // openRegister(){
  //   const model = document.getElementById('registermodal');
  //   if(model != null){
  //     model.style.display = 'block'
  //   }
  // }
}
