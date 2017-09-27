import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { Hero } from '../hero';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  getHeroes(): void {
    this.heroService.getHeroes()
      .then((heroes) => {
        this.heroes = heroes.slice(0, 4);
      })
  }
  constructor(private heroService: HeroService) { }
  ngOnInit(): void {
    this.getHeroes();
  }
}
