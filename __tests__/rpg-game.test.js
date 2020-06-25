import { Character } from './../src/character.js';
import { Game } from './../src/rpg-game.js';
import { Battle } from './../src/battle.js';

describe('character', () => {

  let reusableCharacter;

  beforeEach(() => {
    reusableCharacter = new Character();
  });

  test('should show beforeEach working', () => {
  });

  test('should correctly apply name to character constructor', () => {
    reusableCharacter.newChar("Steve");
    expect(reusableCharacter.name).toBe("Steve");
  });

  test('should correctly apply player tag to character', () => {
    reusableCharacter.applyPlayerTag();
    expect(reusableCharacter.player).toBe(true);
  });

  test('type hacker should correctly affect base skill values', () => {
    reusableCharacter.applyTypeHacker();
    expect(reusableCharacter.type).toBe("hacker");
    expect(reusableCharacter.attack).toEqual(7);
    expect(reusableCharacter.defense).toEqual(7);
  });

  test('type worm should correctly affect base skill values', () => {
    reusableCharacter.applyTypeWorm();
    expect(reusableCharacter.type).toBe("worm");
    expect(reusableCharacter.attack).toEqual(9);
    expect(reusableCharacter.defense).toEqual(5);
  });

  test('type firewall should correctly affect base skill values', () => {
    reusableCharacter.applyTypeFirewall();
    expect(reusableCharacter.type).toBe("firewall");
    expect(reusableCharacter.attack).toEqual(5);
    expect(reusableCharacter.defense).toEqual(9);
  });
});

describe('game', () => {

  let reusableGame;

  beforeEach(() => {
    reusableGame = new Game();
  });

  test('should show beforeEach working', () => {
  });

  test('should correctly build player character and add to characters array', () => {
    reusableGame.buildPlayerChar();
    expect(reusableGame.characters).toHaveLength(1);
  });

  test('should correctly build cpu character one and add to characters array', () => {
    reusableGame.buildCpuOne();
    expect(reusableGame.characters).toHaveLength(1);;
  });

  test('should correctly build cpu character two and add to characters array', () => {
    reusableGame.buildCpuTwo();
    expect(reusableGame.characters).toHaveLength(1);
  });

  test('should correctly add characters to battlefield', () => {
    reusableGame.buildPlayerChar();
    reusableGame.buildCpuOne();
    reusableGame.buildCpuTwo();
    reusableGame.initiateBattle();
    expect(reusableGame.battle).toEqual([{name:"steve", type:"hacker", attack: 7, defense: 7, player: true}, {name: "joe", type: "worm", attack: 9, defense: 5}]);
  });


  test('should correctly calculate attack value', () => {
    reusableGame.buildPlayerChar();
    reusableGame.buildCpuOne();
    reusableGame.buildCpuTwo();
    reusableGame.initiateBattle();
    reusableGame.battleAttack();
    expect(reusableGame.attackRoll).toBeLessThanOrEqual(7);
    console.log(reusableGame.attackRoll);
  });

  test('should correctly calculate defense value', () => {
    reusableGame.buildPlayerChar();
    reusableGame.buildCpuOne();
    reusableGame.buildCpuTwo();
    reusableGame.initiateBattle();
    reusableGame.battleAttack();
    expect(reusableGame.defenseRoll).toBeLessThanOrEqual(5);
    console.log(reusableGame.defenseRoll);
  });

  test('should correctly calculate damage for player attack', () => {
    reusableGame.buildPlayerChar();
    reusableGame.buildCpuOne();
    reusableGame.buildCpuTwo();
    reusableGame.initiateBattle();
    reusableGame.battleAttack();
    expect(reusableGame.damage).toBeGreaterThanOrEqual(0);
    console.log(reusableGame.damage);
  });
});