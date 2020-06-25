import { Character } from './../src/character.js';
import { Battle } from './../src/battle.js';

export class Game {

  constructor (characters) {
    this.characters = [];
  }

  buildPlayerChar(){
    let player = new Character;
    player.newChar("steve");
    player.applyPlayerTag();
    player.applyTypeHacker();
    this.characters.push(player);
  }

  buildCpuOne(){
    let cpuPlayerOne = new Character;
    cpuPlayerOne.newChar("joe");
    cpuPlayerOne.applyTypeWorm();
    this.characters.push(cpuPlayerOne);
  }

  buildCpuTwo(){
    let cpuPlayerTwo = new Character;
    cpuPlayerTwo.newChar("bob");
    cpuPlayerTwo.applyTypeFirewall();
    this.characters.push(cpuPlayerTwo);
  }

  // startGame() {
  // this.characters.push(player);
  // this.characters.push(computerPlayerOne);
  // this.characters.push(computerPlayerTwo);
  //}
} 