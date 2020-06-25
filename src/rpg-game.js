import { Character } from './../src/character.js';

export class Game {
  constructor (characters, battle, turn, attackRoll) {
    this.characters = [];
    this.battle = [];
    this.turn = true;
    this.attackRoll = attackRoll;
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

  battleAttack() {
    let damage;
    let {attack} = this.characters[0];
    this.attackRoll = Math.floor((Math.random() * (attack)) + 1);
    let {defense} = this.characters[1];
    this.defenseRoll = Math.floor((Math.random() * (defense)) +1);
  }
}