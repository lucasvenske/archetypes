import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appScrollTrigger]',
  standalone: true
})
export class ScrollTriggerDirective {

  @Output() reachTop = new EventEmitter<void>();
  @Output() unreachTop = new EventEmitter<void>();

  constructor(private el: ElementRef) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const rect = this.el.nativeElement.getBoundingClientRect();
    console.log(rect)
    if (rect.top <= 30) {
      this.reachTop.emit();
    } else if (rect.top >= 30) {
      this.unreachTop.emit();
    }
  }
}
