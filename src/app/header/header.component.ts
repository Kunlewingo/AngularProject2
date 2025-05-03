import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// [property]="expression"
export class HeaderComponent {
// component.ts
imageUrl = 'https://tse4.mm.bing.net/th/id/OIP.JLBuNJNBBWmIKn8VeiS-9AHaE8?rs=1&pid=ImgDetMain';
link = 'https://angular.io';

// app.component.ts
description = 'Submit the form';



}



