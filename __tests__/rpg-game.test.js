import { Character } from './../src/character.js';

describe('character', () => {

    let reusableCharacter;

    beforeEach(() => {
      reusableCharacter = new Character("Steve", "Hacker");
    });

    test('should show beforeEach working', () => {
      console.log(reusableCharacter);
    });
});