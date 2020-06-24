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

    test('type hacker should correctly affect base skill value', () => {
      reusableCharacter.applyTypeHacker();
      expect(reusableCharacter.attack).toEqual(7);
      expect(reusableCharacter.defense).toEqual(7);
    });
});