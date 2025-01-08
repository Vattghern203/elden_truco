import { Config } from "../types/Config"
import { Player } from "../types/Player"

import { SUITS, VALUES } from "../constants"
import { Card } from "../types/Card"

const DEFAULT_CONFIG: Config = {
    allowJoker: false,
    endsAt: 15,
    gameType: 'paulista'
}

class TrucoGame {
    numPlayers: number
    config?: Config
    players: Player[]
    deck: Card[]

    constructor(numPlayers: number, config = DEFAULT_CONFIG, players: Player[] = []) {
        this.numPlayers = numPlayers
        this.config = config
        this.players = players
        this.deck = this.combineCards()
    }

    showDeck() {

        return this.deck
    }

    showPlayers() { return this.players }

    createTable() {

        const cards = this.combineCards()
        this.shuffleCards(cards)
        this.divideCards(cards, this.numPlayers)

        console.log("Table Created")
        this.players.forEach(player => {
            console.log(player.name);
            console.log(player.cards);
        })
    }

    public divideCards(cards: Card[], numPlayers: number) {

        for (let i = 0; i < numPlayers; i++) {
            this.players.push({
                name: `Player ${i + 1}`,
                cards: cards.splice(0, 3),
                points: 0
            })
        }
    }

    public combineCards() {
        const cards: Card[] = []

        SUITS.forEach(naipe => {
            VALUES.forEach(number => {
                cards.push({
                    number: number,
                    suit: naipe
                })
            })
        })

        return cards
    }


    public shuffleCards(cards: Card[]) {

        for (let i = cards.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }
    }
    
    handleCardsPower(cardsOnTable: Card[]) {
    }
}


const truco = new TrucoGame(2)

console.log(truco.combineCards())

truco.shuffleCards(truco.deck)

truco.createTable()

truco.showDeck()

console.log(truco.showPlayers())