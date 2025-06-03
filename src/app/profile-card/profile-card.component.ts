import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  profileName: string = 'Ayokunle Taiwo Owoseni';
  bio: string = 'My name is Ayokunle, an aspiring programmer.';
  profileImageUrl: string = 'https://via.placeholder.com/150';
  cardBgColor: string = 'lightblue';
  fontStyle: string = 'normal';
  bioVisible: boolean = true;
  bioFontSize: number = 14;
  imageBorder: boolean = false;

  toggleCardColor() {
    this.cardBgColor = this.cardBgColor === 'lightblue' ? 'lightcoral' : 'lightblue';
  }

  toggleBioVisibility() {
    this.bioVisible = !this.bioVisible;
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = e => {
        this.profileImageUrl = e.target?.result as string;
      };
      reader.readAsDataURL(file);
      this.imageBorder = true;
    }
  }
}
