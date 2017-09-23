import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './services/hero.service';


@Component({
  selector: 'app-root',
  template: `
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes"
      (click)="onSelect(hero)"
      [class.selected]="hero === selectedHero">
      <span class="badge">{{hero.id}}</span> 
      {{hero.name}}
    </li>
  </ul>
  <hero-detail [hero]="selectedHero"></hero-detail>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'Tour of heroes';
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .then((heroes) => {
        this.heroes = heroes;
      });

  }
  constructor(private heroService: HeroService) { }
  ngOnInit(): void {
    this.getHeroes();
  }
}
