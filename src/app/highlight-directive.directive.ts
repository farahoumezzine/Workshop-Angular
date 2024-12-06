import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]',
  standalone: true
})
export class HighlightDirectiveDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.classList.add('highlight');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.classList.remove('highlight');
  }
}
