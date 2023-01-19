export default class Team {
  constructor() {
    this.members = new Set();
  }

  * [Symbol.iterator]() {
    const arrayTeam = Array.from(this.members);
    let current = 0;
    while (current < arrayTeam.length) {
      yield this.arrayTeam[current];
      current += 1;
    }
  }
}
