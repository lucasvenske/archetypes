import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Quiz } from '../utils/test/quiz';
import { questions } from '../utils/test/questions.const';
import { SlickCarouselComponent, SlickCarouselModule } from 'ngx-slick-carousel';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { ArchetypesColors } from '../utils/archetype-color.enum';
import { Option, Question } from '../utils/test/question.interface';
import { Archetypes } from '../utils/archetypes.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [HeaderComponent, SlickCarouselModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1, })),
      ]),
      transition(':leave', [
        animate(500, style({ opacity: 0, })),
      ])
    ])
  ]
})
export class TestComponent implements OnInit {

  @ViewChild('slickModal') slickModal: SlickCarouselComponent | null = null;

  questionsCopy = JSON.parse(JSON.stringify(questions));
  quiz: Quiz = new Quiz(this.questionsCopy);
  ArchetypesColors = ArchetypesColors;
  currentSlide: number = 1;

  slideConfig = {
    slidesToShow: 1,
    infinite: false,
    arrows: false,
    swipeToSlide: false
  };

  illustrationArray = [
    {
      image1: "../../assets/img/test/coroa-laranja.svg",
      image2: "../../assets/img/test/planeta-laranja.svg"
    },
    {
      image1: "../../assets/img/test/mao-verde.svg",
      image2: "../../assets/img/test/lua-verde.svg"
    },
    {
      image1: "../../assets/img/test/mao-verde.svg",
      image2: "../../assets/img/test/lua-verde.svg"
    },
    {
      image1: "../../assets/img/test/mao-verde.svg",
      image2: "../../assets/img/test/lua-verde.svg"
    },
    {
      image1: "../../assets/img/test/mao-verde.svg",
      image2: "../../assets/img/test/lua-verde.svg"
    },
    {
      image1: "../../assets/img/test/mao-verde.svg",
      image2: "../../assets/img/test/lua-verde.svg"
    },
    {
      image1: "../../assets/img/test/mao-verde.svg",
      image2: "../../assets/img/test/lua-verde.svg"
    },
    {
      image1: "../../assets/img/test/mao-verde.svg",
      image2: "../../assets/img/test/lua-verde.svg"
    },
    {
      image1: "../../assets/img/test/mao-verde.svg",
      image2: "../../assets/img/test/lua-verde.svg"
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.slickModal?.initSlick();
  }

  afterChange(event: any) {
    this.currentSlide = event.currentSlide + 1;
    this.quiz.currentQuestionIndex = event.currentSlide;
  }

  handleClick(archetype: Archetypes) {
    this.quiz.submitAnswer(archetype);
    if (this.quiz.isQuizFinished()) {
      this.router.navigate(["result", this.quiz.getResult()])
    } else {
      this.next();
    }
  }

  answer(archetype: Archetypes): void {
    this.quiz.submitAnswer(archetype);
  }

  next() {
    this.slickModal?.slickNext();
  }

  prev() {
    this.slickModal?.slickPrev();
  }

}
