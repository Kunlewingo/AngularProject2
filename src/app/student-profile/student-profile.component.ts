import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html'
})
export class StudentProfileComponent {
  studentName = 'John Doe';
  studentAge = 20;
  profileImageUrl = 'https://www.oasislimousines.co.uk/rolls-royce-cullinan-black-badge-2.html';
  isButtonDisabled = false;
  colspanValue = 2;
}
