import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-student',
  templateUrl: './login-student.component.html',
  styleUrl: './login-student.component.css'
})
export class LoginStudentComponent {
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
