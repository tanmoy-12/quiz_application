import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  showLoginForm: boolean = true;
  showSignupForm: boolean = false;
  protected aFormGroup!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['', Validators.required]
    });
  }

  
  ShowSignupForm(): void {
    this.showLoginForm = false;
    this.showSignupForm = true;
  }

  ShowLoginForm(): void {
    this.showLoginForm = true;
    this.showSignupForm = false;
  }

  login(): void {
    // Your login logic goes here
  }

  signup(): void {
    // Your signup logic goes here
  }


  siteKey:string = "6Ld-goIpAAAAAIHJV7D6aPRYplaIPUqlUK0AISgd";


}
