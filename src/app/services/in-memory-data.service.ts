import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Zero', attributes: {str: 15, agi: 15, sta: 15, dex: 15, int: 15} },
      { id: 11, name: 'Mr. Nice', attributes: {str: 10, agi: 12, sta: 15, dex: 13, int: 11} },
      { id: 12, name: 'Narco', attributes: {str: 10, agi: 12, sta: 15, dex: 13, int: 11} },
      { id: 13, name: 'Bombasto', attributes: {str: 12, agi: 18, sta: 10, dex: 16, int: 9} },
      { id: 14, name: 'Celeritas', attributes: {str: 17, agi: 12, sta: 20, dex: 15, int: 5} },
      { id: 15, name: 'Magneta', attributes: {str: 14, agi: 12, sta: 14, dex: 12, int: 7} },
      { id: 16, name: 'RubberMan', attributes: {str: 14, agi: 12, sta: 18, dex: 9, int: 12} },
      { id: 17, name: 'Dynama', attributes: {str: 16, agi: 12, sta: 10, dex: 17, int: 14} },
      { id: 18, name: 'Dr IQ', attributes: {str: 5, agi: 5, sta: 11, dex: 10, int: 20}},
      { id: 19, name: 'Magma', attributes: {str: 18, agi: 13, sta: 11, dex: 15, int: 10} },
      { id: 20, name: 'Tornado', attributes: {str: 20, agi: 20, sta: 5, dex: 10, int: 5} }
    ];
    return {heroes};
  }
}