import { Component, Input} from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'techstarter-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() held?: Hero;

}
