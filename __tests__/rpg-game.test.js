import { Character } from './../src/character.js';

describe('character', () => {

    let reusableCharacter;

    beforeEach(() => {
      reusableCharacter = new Character();
    });

    test('should show beforeEach working', () => {
      console.log(reusableCharacter);
    });

    test('should correctly apply name and type to character constructor', () => {
      reusableCharacter.newChar();
      expect(reusableCharacter.name).toBe("Steve");
      expect(reusableCharacter.type).toBe("Hacker");
    });
});