import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  fullName: string = '';
  email: string = '';
  age: number | null = null;
  gender: string = '';
  subscribed: boolean = false;

  resetForm() {
    this.fullName = '';
    this.email = '';
    this.age = null;
    this.gender = '';
    this.subscribed = false;
  }

  submitForm() {
    alert(`Submitted Data:\n
Full Name: ${this.fullName}
Email: ${this.email}
Age: ${this.age}
Gender: ${this.gender}
Subscribed: ${this.subscribed ? 'Yes' : 'No'}`);
  }
}
