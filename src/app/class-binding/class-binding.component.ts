// class-binding-example.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']  // optional
})
export class ClassBindingComponent {
  // Boolean flags for conditional classes
  isActive = true;
  hasError = false;

  // String used to bind to the class attribute
  statusClass = 'status-highlight';

  // Object for ngClass binding: keys are class names, values determine if applied
  dynamicClasses = {
    'active': this.isActive,
    'error': this.hasError
  };
}
