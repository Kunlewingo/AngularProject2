import { Component, ElementRef } from '@angular/core';

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
  isLoggedIn = false;
  bioFontSize: number = 14;
  imageBorder: boolean = false;
  isActive = true;

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
  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
  items = ['Apple, Banana, Orange'];

textColor = 'blue';
  fontSize = '24px';
  changeStyle() {
  this.textColor = 'green';
  this.fontSize = '30px';
  
}
}
