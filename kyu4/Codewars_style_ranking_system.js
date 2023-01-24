const RANKS = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];

class User {
  constructor() {
    this.rank = RANKS[0];
    this.progress = 0;
  }

  incProgress(value) {
    if (RANKS.indexOf(value) === -1) throw "Rank out of range (-8..-1;1..8)";
    if (this.rank === Math.max(RANKS)) return;

    const diff = RANKS.indexOf(value) - RANKS.indexOf(this.rank);

    if (diff == 0 && this.rank < 8) this.progress += 3;
    else if (diff == -1) this.progress++;
    else if (value > this.rank) this.progress += 10 * diff * diff;

    while (this.progress >= 100) {
      this.rank = RANKS[RANKS.indexOf(this.rank) + 1];
      this.progress -= 100;
      if (this.rank >= 8) this.progress = 0;
    }
  }
}

const user = new User();

console.log(user.rank); // => -8
console.log(user.progress); // => 0
console.log(user.incProgress(-7));
console.log(user.progress); // => 10
console.log(user.incProgress(-5)); // will add 90 progress
