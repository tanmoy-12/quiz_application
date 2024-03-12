import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-teacher',
  templateUrl: './login-teacher.component.html',
  styleUrl: './login-teacher.component.css'
})
export class LoginTeacherComponent {
  showLoginForm: boolean = true;
  showSignupForm: boolean = false;
  showPasswordPopupFlag: boolean = false;


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

  showPasswordPopup() {
    this.showPasswordPopupFlag = true;
  }

  checkPassword(enteredPassword: string) {
    const correctPassword = '1234'; // Your correct password

    if (enteredPassword === correctPassword) {
      // Password is correct, show the signup form
      this.showSignupForm = true;
      this.showLoginForm = false;
    } else {
      // Password is incorrect, do something (e.g., show an error message)
      alert('Incorrect password');
    }

    // Hide the password popup regardless of the result
    this.showPasswordPopupFlag = false;
  }

  login(): void {
    // Your login logic goes here
  }

  signup(): void {
    // Your signup logic goes here
  }


  siteKey:string = "6Ld-goIpAAAAAIHJV7D6aPRYplaIPUqlUK0AISgd";
}
