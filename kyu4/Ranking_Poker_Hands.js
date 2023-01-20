const Result = { win: 1, loss: 2, tie: 3 };

class PokerHand {
  constructor(hand) {
    const cards = parse(hand);
    const cardsByRank = cards.reduce((acc, x) => {
      !acc[x.rank] && (acc[x.rank] = []);
      acc[x.rank].push(x);
      return acc;
    }, {});
    this.cards = cards;
    this.cardsByRank = Object.entries(cardsByRank);
    this.isSameSuite = cards.every((x) => x.suite === cards[0].suite);
    this.isSequence = cards.every(
      (x, i) => i > 3 || x.rank === cards[i + 1].rank + 1
    );
  }

  compareWith(hand) {
    const myRank = getRank(this);
    const oponentRank = getRank(hand);
    if (myRank > oponentRank) return Result.win;
    if (myRank < oponentRank) return Result.loss;
    return Result.tie;
  }
}

const same =
  (count) =>
  ([_, v]) =>
    v.length === count;

const RANKS = [
  (x) => x.isSameSuite && x.isSequence && x.cards[0].name === "A", // royal flush
  (x) => x.isSequence && x.isSameSuite, // straight flush
  (x) => x.cardsByRank.some(same(4)), // four of the kind
  (x) => x.cardsByRank.some(same(3)) && x.cardsByRank.some(same(2)), // full house
  (x) => x.isSameSuite, // flush
  (x) => x.isSequence, // straight
  (x) => x.cardsByRank.some(same(3)), // three of the kind
  (x) => x.cardsByRank.filter(same(2)).length === 2, // two pairs
  (x) => x.cardsByRank.some(same(2)), // pair
  (_) => true,
];

const getRank = (hand) => {
  const rank = RANKS.length - RANKS.findIndex((x) => x(hand));
  const score = Math.pow(10, rank);
  const baseScore = hand.cards
    .map((x, i) => (x.rank + 1) / Math.pow(10, i))
    .reduce((acc, x) => acc + x, 0);
  return score + baseScore;
};

const parse = (hand) =>
  hand
    .split(" ")
    .map((card) => ({
      name: card[0],
      suite: card[1],
      rank: "23456789TJQKA".indexOf(card[0]),
    }))
    .sort((a, b) => b.rank - a.rank);
