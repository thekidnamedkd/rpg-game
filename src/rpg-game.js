import { Character } from './../src/character.js';
import { Battle } from './../src/battlength.js';

export class Game {

  constructor (characters) {
    this.characters = [];
  }

  startGame() {
    this.characters.push(new Character("Steve").applyTypeHacker());
    this.characters.push(new Character("Joe").applyTypeWorm());
    this.characters.push(new Character("Bob").applyTypeFirewall());
  }
}