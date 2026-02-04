import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  standalone: true
})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted = false;

  constructor() { 
    console.log("Directive created"); 
  }

  @HostBinding('class.highlighted') 
    get cssClasses() {
      return this.isHighlighted;
  }

  @HostListener('mouseover')
  mouseOver() {
    this.isHighlighted = true;
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.isHighlighted = false;
  }

}

