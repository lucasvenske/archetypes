import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ArchetypesColors } from '../utils/archetype-color.enum';
import { ArchetypesResult } from '../utils/test/question.interface';
import { Archetypes } from '../utils/archetypes.enum';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './result.component.html',
  styleUrl: './result.component.scss'
})
export class ResultComponent implements OnInit {

  public archetypeId: string | null = null
  ArchetypesColors = ArchetypesColors;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.archetypeId = this.route.snapshot.paramMap.get("id");
  }

  resultArray: ArchetypesResult[] = [
    {
      id: Archetypes.Sage,
      title: "the sage",
      text: "You’re the Sage, the wise one with a treasure trove of knowledge and insight. People come to you for advice because you see things so clearly. Your calm and thoughtful demeanor makes you a rock in stormy seas. Yet, you might find it hard to connect emotionally with others, and your tendency to overanalyze can lead to indecisiveness.",
      image: "../../assets/img/arch1.png",
      icon: "../../assets/img/result/sage.png"
    },
    {
      id: Archetypes.Queen,
      title: "the queen",
      text: "You’re the Queen, the boss lady with a regal presence and a knack for leadership. You command respect with your grace and wisdom, ruling your domain with a perfect mix of fairness and strength. Bow down, everyone! On the flip side, you can be a bit controlling and struggle to admit when you’re wrong. Showing vulnerability isn’t exactly your strong suit.",
      image: "../../assets/img/arch2.png",
      icon: "../../assets/img/result/queen.png"
    },
    {
      id: Archetypes.Warrior,
      title: "the warrior",
      text: "You’re the Warrior, brave and bold, ready to tackle any challenge head-on. Your courage and resilience are legendary, and you fight fiercely for what you believe in. When the going gets tough, you’re the one everyone looks to. But your aggressive approach can sometimes lead to conflicts, and balancing your battles with self-care to avoid burnout can be tough.",
      image: "../../assets/img/arch3.png",
      icon: "../../assets/img/result/warrior.png"
    },
    {
      id: Archetypes.Mother,
      title: "the mother",
      text: "You're the Mother, the ultimate caregiver and emotional support system. You're all about compassion and empathy, making sure everyone around you feels loved and taken care of. However, you can be overprotective and self-sacrificing, often neglecting your own needs. Letting go and allowing others to grow independently can be a real challenge for you.",
      image: "../../assets/img/arch4.png",
      icon: "../../assets/img/result/mother.png"
    },
    {
      id: Archetypes.Lover,
      title: "the lover",
      text: "You’re the Lover. All about passion, sensuality, and living life to the fullest. You find joy in every little pleasure and beauty in everything. Your charisma and charm are absolutely irresistible. However, you can sometimes prioritize pleasure over responsibility, and your intense emotions can make you prone to jealousy and possessiveness.",
      image: "../../assets/img/arch5.png",
      icon: "../../assets/img/result/lover.png"
    },
    {
      id: Archetypes.Mystic,
      title: "the mystic",
      text: "You’re the Mystic, shrouded in mystery and dripping with intuition. You’ve got that magical vibe that leaves everyone spellbound, and your ability to sense what’s beneath the surface is uncanny. But be careful, your charm can sometimes border on manipulation, and your unpredictable emotions can leave others guessing.",
      image: "../../assets/img/arch6.png",
      icon: "../../assets/img/result/mystic.png"
    },
    {
      id: Archetypes.Maiden,
      title: "the maiden",
      text: "You’re the Maiden, bursting with youthful optimism and endless potential. You see the world as a place full of opportunities and adventures waiting to be discovered. Your energy and enthusiasm are contagious, making everyone around you want to join in on your next big journey. Sometimes, your naivety and idealism can get you into tricky situations, and commitment can feel like a chain that holds you back from exploring the world.",
      image: "../../assets/img/arch7.png",
      icon: "../../assets/img/result/maiden.png"
    }
  ]

  get archetypeResult() {
    return this.resultArray.find(x => x.id == this.archetypeId) as ArchetypesResult
  }

}
