import { Character } from './../src/character.js';
import { Battle } from './../src/battle.js';

export class Game {
  constructor (characters, battle, turn) {
    this.characters = [];
    this.battle = [];
    this.turn = true;
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

  initiateBattle() {
    this.battle = ([this.characters[0], this.characters[1]]);
    this.turn = true;    
  } 
}