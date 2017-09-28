import { Injectable } from '@angular/core';
import { Hero } from '../hero'
import { InMemoryDataService } from './in-memory-data.service';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error has occurred', error);
    return Promise.reject(error.message || error);
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => {
        return response.json().data as Hero[]
      })
      .catch(this.handleError)
  }


  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http.put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError)
  }

  create(name: string): Promise<Hero> {
    return this.http.post(this.heroesUrl, JSON.stringify({
      name: name,
      attributes: {
        str: Math.floor((Math.random() * 15) + 1),
        agi: Math.floor((Math.random() * 15) + 1),
        sta: Math.floor((Math.random() * 15) + 1),
        dex: Math.floor((Math.random() * 15) + 1),
        int: Math.floor((Math.random() * 15) + 1)
      }
      }), {headers: this.headers})
      .toPromise()
      .then(res => {
        return res.json().data as Hero
      })
      .catch(this.handleError);
  }

  delete(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}