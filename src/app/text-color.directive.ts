import { Directive } from '@angular/core';
import { ElementRef, Renderer2} from '@angular/core';
@Directive({
  selector: '[appTextColor]'
})
export class TextColorDirective {
constructor(private el: ElementRef, private rend: Renderer2) {
this.rend.setStyle(this.el.nativeElement, 'color', 'red')
  }
  

}
