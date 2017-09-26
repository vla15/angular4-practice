import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './services/hero.service';


@Component({
  selector: 'app-root',
  template: `<hero><hero>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }
  ngOnInit() {}
}
