export class Character {
  constructor(name, type, attack, defense) {
    this.name = name;
    this.type = type;
    this.attack = 5;
    this.defense = 5;
  }

  newChar() {
    this.name = "Steve";
  }

  applyTypeHacker() {
    this.type = "hacker"
    this.attack += 2;
    this.defense += 2;
  }

  applyTypeWorm() {
    this.type = "worm"
    this.attack += 4;
    this.defense += 0;
  }

  applyTypeFirewall() {
    this.type = "firewall"
    this.attack += 0;
    this.defense += 4;
  }

};