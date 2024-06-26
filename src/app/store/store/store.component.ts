import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {

  starStoreList = [
    {
      id: "sage",
      title: "the sage",
      img: "../../assets/img/star1.svg"
    },
    {
      id: "queen",
      title: "the queen",
      img: "../../assets/img/star2.svg"
    },
    {
      id: "warrior",
      title: "the warrior",
      img: "../../assets/img/star3.svg"
    },
    {
      id: "mother",
      title: "the mother",
      img: "../../assets/img/star4.svg"
    },
    {
      id: "lover",
      title: "the lover",
      img: "../../assets/img/star5.svg"
    },
    {
      id: "mystic",
      title: "the mystic",
      img: "../../assets/img/star6.svg"
    },
    {
      id: "maiden",
      title: "the maiden",
      img: "../../assets/img/star7.svg"
    },
  ]

  public currentStoreId: string = 'sage';
  public sageShirt: string = '../../assets/img/front-sage.png';
  public queenShirt: string = '../../assets/img/front-queen.png';
  public warriorShirt: string = '../../assets/img/front-warrior.png';
  public motherShirt: string = '../../assets/img/front-mother.png';
  public loverShirt: string = '../../assets/img/front-lover.png';
  public mysticShirt: string = '../../assets/img/front-mystic.png';
  public maidenShirt: string = '../../assets/img/front-maiden.png';

  slideConfig = {
    slidesToShow: 7,
    infinite: false,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      }
    ]
  };

  onClickStore(id: string) {
    this.currentStoreId = id;
  }

  isStoreActive(id: string) {
    return this.currentStoreId === id;
  }

}
