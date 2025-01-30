"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../constants");
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
        this.deck = this.combineCards();
    }
    showDeck() {
        return this.deck;
    }
    showPlayers() { return this.players.map(player => player.cards); }
    createTable() {
        const cards = this.combineCards();
        this.shuffleCards(cards);
        this.divideCards(cards, this.numPlayers);
        console.log("Table Created");
        this.players.forEach(player => {
            console.log(player.name);
            console.log(player.cards);
        });
    }
    divideCards(cards, numPlayers) {
        for (let i = 0; i < numPlayers; i++) {
            this.players.push({
                name: `Player ${i + 1}`,
                cards: cards.splice(0, 3),
                points: 0
            });
        }
    }
    combineCards() {
        const cards = [];
        constants_1.SUITS.forEach(naipe => {
            constants_1.VALUES.forEach(number => {
                cards.push({
                    number: number,
                    suit: naipe,
                    order: constants_1.CARD_ORDER.indexOf(number) + 1,
                    value: constants_1.CARD_POWERS.indexOf(number) + 1
                });
            });
        });
        return cards;
    }
    getCardPower(card) {
    }
    shuffleCards(cards) {
        for (let i = cards.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }
    }
    handleCardsOrder(cardOrder) {
        if (cardOrder === 10) {
            return 1;
        }
        return cardOrder + 1;
    }
    handleTrumpCard() {
        const flippedCard = this.deck.pop();
        if (flippedCard) {
            const cardToFind = Number(flippedCard === null || flippedCard === void 0 ? void 0 : flippedCard.number);
            console.log(constants_1.CARD_ORDER[cardToFind]);
            console.log('O vira é:', flippedCard);
            const trumpCards = [];
            trumpCards.push(this.deck.filter(card => card.order == this.handleCardsOrder(flippedCard.order)));
            console.log('As manilhas são:', trumpCards);
        }
    }
    handleCardsPower(cardsOnTable) {
    }
}
const truco = new TrucoGame(2);
console.log(truco.combineCards());
truco.shuffleCards(truco.deck);
truco.handleTrumpCard();
truco.createTable();
truco.showDeck();
//console.log(truco.showPlayers())
