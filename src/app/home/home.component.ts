import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { ScrollTriggerDirective } from '../utils/scroll-trigger.directive';
import { AboutComponent } from '../about/about.component';
import { StoreComponent } from '../store/store/store.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ScrollTriggerDirective, AboutComponent, StoreComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('scrollableElement') scrollableElement!: ElementRef;
  @ViewChild('mainScroll') mainScroll!: ElementRef;

  private renderer = inject(Renderer2)
  private elRef = inject(ElementRef)

  public fixed: boolean = false;
  public windowWidth: number = 0;
  public scrollHeight: number = 0;
  public elDistanceToTop: number = 0;
  public currentCardId: string = '';
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.windowWidth = window.innerWidth;
      console.log(this.mainScroll.nativeElement.getBoundingClientRect())
      console.log(document.getElementById('teste')?.scrollWidth)
      this.scrollHeight = 5600;
    }, 0);

    this.elDistanceToTop = window.scrollY + this.mainScroll.nativeElement.getBoundingClientRect().top;

  }

  onReachTop() {
    if (!this.fixed)
      this.fixed = true;
  }

  onUnreachTop() {
    if (this.fixed)
      this.fixed = false;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop - this.elDistanceToTop <= this.mainScroll.nativeElement.scrollWidth - window.innerWidth / 3) {
    }
    this.renderer.setStyle(this.mainScroll.nativeElement, 'transform', `translateX(-${scrollTop - this.elDistanceToTop}px)`);
  }

  onClickCard(id: string) {
    this.currentCardId = id === this.currentCardId ? '' : id;
  }

  isActiveCard(id: string) {
    return this.currentCardId === id;
  }
}
