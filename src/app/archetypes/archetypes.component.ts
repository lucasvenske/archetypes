import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild, inject } from '@angular/core';
import { ScrollTriggerDirective } from '../utils/scroll-trigger.directive';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { Archetypes } from '../utils/archetypes.enum';

@Component({
  selector: 'app-archetypes',
  standalone: true,
  imports: [CommonModule, ScrollTriggerDirective, SlickCarouselModule],
  templateUrl: './archetypes.component.html',
  styleUrl: './archetypes.component.scss'
})
export class ArchetypesComponent implements AfterViewInit, OnInit {

  @ViewChild('scrollableElement') scrollableElement!: ElementRef;
  @ViewChild('mainScroll') mainScroll!: ElementRef;

  private renderer = inject(Renderer2)

  public isMobile: boolean = false;

  archetypes = [
    {
      id: Archetypes.Sage,
      title: "the sage",
      img: "../../assets/img/arch1.png",
      imgComp: "../../assets/img/comp1.png",
      content: "Driven by a profound curiosity and a relentless pursuit of truth. Values wisdom and often shares this knowledge with others to enlighten and educate.",
      qualities: ['intellectual', 'detached', 'analytical', 'objective', 'reclusive', 'insightful']
    },
    {
      id: Archetypes.Queen,
      title: "the queen",
      img: "../../assets/img/arch2.png",
      imgComp: "../../assets/img/comp2.png",
      content: "Represents a strong, nurturing leader who inspires and supports those around her.She values stability, fairness, and the well-being of her family or community.",
      qualities: ['supportive', 'controlling', 'empathetic', 'perfectionistic', 'loyal', 'stubborn']
    },
    {
      id: Archetypes.Warrior,
      title: "the warrior",
      img: "../../assets/img/arch3.png",
      imgComp: "../../assets/img/comp3.png",
      content: "Characterized by a fierce drive to protect and achieve, often embodying a strong sense of justice. Is a natural leader, always ready to face challenges.",
      qualities: ['determined', 'agressive', 'confident', 'impatient', 'protective', 'resilient']
    },
    {
      id: Archetypes.Mother,
      title: "the mother",
      img: "../../assets/img/arch4.png",
      imgComp: "../../assets/img/comp4.png",
      content: "Has a deep desire to care for others. Is often seen as the emotional backbone in her relationships, always providing comfort and sustenance.",
      qualities: ['nurturing', 'anxious', 'compassionate', 'self-sacrificing', 'patient', 'overprotective']
    },
    {
      id: Archetypes.Lover,
      title: "the lover",
      img: "../../assets/img/arch5.png",
      imgComp: "../../assets/img/comp5.png",
      content: "Embodies passion, desire, and the appreciation of intimacy. Is deep connected to emotions and sensuality. Values relationships and the pleasures of the moment.",
      qualities: ['passionate', 'jealous', 'creative', 'impulsive', 'charismatic', 'dependent']
    },
    {
      id: Archetypes.Mystic,
      title: "the mystic",
      img: "../../assets/img/arch6.png",
      imgComp: "../../assets/img/comp6.png",
      content: "Embodies spirituality, intuition, and a deep connection to the unseen world. Characterized by a quest for inner truth and a desire to understand the mysteries of existence.",
      qualities: ['intuitive', 'isolated', 'reflective', 'detached', 'calm', 'neglectful']
    },
    {
      id: Archetypes.Maiden,
      title: "the maiden",
      img: "../../assets/img/arch7.png",
      imgComp: "../../assets/img/comp7.png",
      content: "Represents youth, innocence, and new beginnings. This archetype is characterized by a sense of curiosity, optimism, and a readiness to embrace life's adventures.",
      qualities: ['curious', 'insecure', 'playful', 'avoidant', 'innocent', 'adventurous']
    }
  ]


  public fixed: boolean = false;
  public windowWidth?: number;
  public scrollHeight: number = 5600;
  public scrollHeightDefined: boolean = false;
  public elDistanceToTop: number = 0;
  public currentCardId: string = '';

  slideConfig = {
    slidesToShow: 2,
    infinite: false,
    arrows: true,
    swipeToSlide: true,
    prevArrow: "<img class='slick-arrow slick-prev me-2' src='../../assets/img/arrow-prev.svg' style='height: 28px !important'>",
    nextArrow: "<img class='slick-arrow slick-next ms-2' src='../../assets/img/arrow-next.svg' style='height: 28px !important'>",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;

    if (this.windowWidth! <= 1024)
      this.isMobile = true;
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.windowWidth! <= 1024)
        this.isMobile = true;
    }, 0);



    this.elDistanceToTop = window.scrollY + this.mainScroll?.nativeElement.getBoundingClientRect().top;

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
    if (this.mainScroll) {
      if (!this.scrollHeightDefined) {
        this.scrollHeight = this.mainScroll.nativeElement.scrollWidth;
        this.scrollHeightDefined = true;
      }
      const scrollTop = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
      /* if (scrollTop - this.elDistanceToTop <= this.mainScroll.nativeElement.scrollWidth - window.innerWidth / 3) {
      } */
      this.renderer.setStyle(this.mainScroll.nativeElement, 'transform', `translateX(-${scrollTop - this.elDistanceToTop}px)`);

    }
  }

  onClickCard(id: string) {
    this.currentCardId = id === this.currentCardId ? '' : id;
  }

  isActiveCard(id: string) {
    return this.currentCardId === id;
  }
}
