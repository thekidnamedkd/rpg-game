import { Character } from './../src/character.js';
import { Battle } from './../src/battle.js';

export class Game {

  constructor (characters) {
    this.characters = [];
  }

  buildPlayerChar(){
    let player = new Character;
    player.newChar();
    player.applyPlayerTag();
    player.applyTypeHacker();
    this.characters.push(player);
  }

  buildCpuOne(){

  }

  // startGame() {
  // this.characters.push(player);
  // this.characters.push(computerPlayerOne);
  // this.characters.push(computerPlayerTwo);
  //}
} 