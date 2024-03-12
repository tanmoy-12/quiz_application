import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-password-popup',
  templateUrl: './password-popup.component.html',
  styleUrl: './password-popup.component.css'
})
export class PasswordPopupComponent {
  @Output() passwordEntered = new EventEmitter<string>();
  password: string = '';

  submitPassword() {
    this.passwordEntered.emit(this.password);
  }
}
