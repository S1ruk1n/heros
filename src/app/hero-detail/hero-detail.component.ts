import { Component, OnInit} from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'techstarter-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  held: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeld();
  }
  

  getHeld(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.heroService.getHeld(id)
      .subscribe(held=> this.held = held);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.held) {
      this.heroService.updateHeld(this.held)
        .subscribe(() => this.goBack());
    }
  }
}
