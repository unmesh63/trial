import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../core/auth.service'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  {
  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';
  constructor(
    public authService: AuthService,
     private router: Router,
    private fb: FormBuilder) {  this.createForm();}
    createForm() {
      this.registerForm = this.fb.group({
        email: ['', Validators.required ],
        password: ['',Validators.required]
      });
    }
    tryRegister(value){
      this.authService.doRegister(value)
      .then(res => {
        console.log(res);
        //window.alert("account has been created");
        this.errorMessage = "";
        this.successMessage = "Your account has been created";
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      })
    }
 
 }
  


