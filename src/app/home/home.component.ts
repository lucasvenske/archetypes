import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { ScrollTriggerDirective } from '../utils/scroll-trigger.directive';
import { AboutComponent } from '../about/about.component';
import { StoreComponent } from '../store/store/store.component';
import { ArchetypesComponent } from '../archetypes/archetypes.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ScrollTriggerDirective, AboutComponent, StoreComponent, ArchetypesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent { }
