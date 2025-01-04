"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
function drawCard(cards) {
    return cards.pop();
}
function drawNCards(cards, n) {
    return cards.splice(-n);
}
function divideCards(cards, numPlayers) {
    const players = Array.from({ length: numPlayers }, () => []);
    cards.forEach((card, index) => {
        const playerIndex = index % numPlayers;
        players[playerIndex].push(card);
    });
    return players;
}
const DEFAULT_CONFIG = {
    allowJoker: false,
    endsAt: 15,
    gameType: 'paulista'
};
class TrucoGame {
    constructor(numPlayers, config = DEFAULT_CONFIG, players = []) {
        this.numPlayers = numPlayers;
        this.config = config;
        this.players = players;
        this.deck = this._combineCards();
    }
    createTable() {
        const cards = this._combineCards();
        this._shuffleCards(cards);
        const players = divideCards(cards, this.numPlayers);
        this.players = players.map((playerCards) => ({
            cards: playerCards,
            points: 0
        }));
    }
    _combineCards() {
        const cards = [];
        constants_1.SUITS.forEach(naipe => {
            constants_1.VALUES.forEach(number => {
                cards.push({
                    number: number,
                    suit: naipe
                });
            });
        });
        return cards;
    }
    _shuffleCards(cards) {
        for (let i = cards.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }
    }
}
const truco = new TrucoGame(2);
console.log(truco._combineCards());
