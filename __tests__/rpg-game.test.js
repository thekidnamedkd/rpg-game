import { Character } from './../src/character.js';

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
    })
});