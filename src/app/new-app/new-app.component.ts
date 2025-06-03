import { Component } from '@angular/core';

@Component({
  selector: 'app-new-app',
  templateUrl: './new-app.component.html',
  styleUrls: ['./new-app.component.css']
})
export class NewAppComponent {
  isError = true
  isPrimary = true;
  boxWidth = 250;  // rendered as width: 200px
  boxHeight = 150;  // rendered as height: 50%
  toggleClass() {
    this.isError = !this.isError
    
  }

isActive = true
isHighlight = true
isDark = false
dynamicStyles = {
    'background-color': this.isPrimary ? 'blue' : 'gray',
    'color': 'white',
    'padding.px': 10
  };
 
  isLargeText = false;
  isDisabled = true;
  sayHello() {
    console.log('Hello from Angular!');
  }
userInput = '';

  onInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.userInput = inputElement.value;
  }
  count = 0;

  onButtonClick() {
    this.count++;
  }

  name = '';

  onNameInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.name = input.value;
  }
}