import { Character } from './../src/character.js';
import { Game } from './../src/rpg-game.js';
import { Battle } from './../src/battle.js';

describe('character', () => {

    let reusableCharacter;

    beforeEach(() => {
      reusableCharacter = new Character();
    });

    test('should show beforeEach working', () => {
      console.log(reusableCharacter);
    });

    test('should correctly apply name to character constructor', () => {
      reusableCharacter.newChar();
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
    console.log(reusableGame);
  });

  test('should correctly add characters to array', () => {
    reusableGame.startGame();
    console.log(reusableGame);
    expect(reusableGame.characters).toHaveLength(3);
  });
});

describe('battle', () => {

  let reusableBattle;

  beforeEach(() => {
    reusableBattle = new Battle;
  });

  test('should show beforeEach working', () => {
    console.log(reusableBattle);
  });
});