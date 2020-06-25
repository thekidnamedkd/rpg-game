import { Character } from './../src/character.js';

export class Game {
  constructor (characters, battle, turn, attackRoll, defenseRoll, damage) {
    this.characters = [];
    this.battle = [];
    this.turn = true;
    this.attackRoll = attackRoll;
    this.defenseRoll = defenseRoll;
    this.damage = damage;
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
    let {attack} = this.characters[0];
    this.attackRoll = Math.floor(Math.random() * Math.floor(attack));
    let {defense} = this.characters[1];
    this.defenseRoll = Math.floor(Math.random() * Math.floor(defense));
    if (this.attackRoll > this.defenseRoll) {
      this.damage = this.attackRoll - this.defenseRoll;
    } else {
      this.damage = 0;
    }
  }
}