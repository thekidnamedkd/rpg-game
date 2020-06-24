import { Character } from './../src/character.js';

describe('character', () => {

    let reusableCharacter;

    beforeEach(() => {
      resuableCharacter = new Character(name, type);
    });

    test('should show beforeEach working', () => {
      console.log(reusableCharacter);
    });
});