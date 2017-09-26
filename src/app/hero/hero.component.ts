import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  title: string = 'Hall of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .then((heroes) => {
        this.heroes = heroes
      })
  }
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}
