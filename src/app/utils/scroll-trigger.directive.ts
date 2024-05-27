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
    if (rect.top <= 50) {
      this.reachTop.emit();
    } else if (rect.top >= 50) {
      this.unreachTop.emit();
    }
  }
}
