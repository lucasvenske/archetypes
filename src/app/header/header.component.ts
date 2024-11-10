import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgbModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {


  @ViewChild('header') header!: ElementRef;

  collapse: boolean = false;
  fixedHeader: boolean = false;
  scrollUp: boolean = false;
  currentPosition: number = 0;

  ngOnInit(): void {
    this.currentPosition = window.scrollY;

  }

  scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (section) {
      this.toggleNavBar();
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let scroll = window.scrollY;
    if (scroll > this.currentPosition) {
      this.scrollUp = false;
    } else {
      if (window.scrollY >= 150)
        this.scrollUp = true;
      else
        this.scrollUp = false;
    }

    if (window.scrollY >= 73)
      this.fixedHeader = true
    else
      this.fixedHeader = false

    this.currentPosition = scroll;
  }

  toggleNavBar() {
    this.collapse = !this.collapse;
  }
}
