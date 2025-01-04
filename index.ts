import { Config } from "./types/Config"
import { Player } from "./types/Player"

import { SUITS, VALUES } from "./constants"
import { Card } from "./types/Card"

function drawCard(cards) {
    return cards.pop()
}

function drawNCards(cards, n) {
    return cards.splice(-n)
}

function divideCards(cards, numPlayers) {
    const players = Array.from({ length: numPlayers }, () => [])

    cards.forEach((card, index) => {
        const playerIndex = index % numPlayers
        players[playerIndex].push(card)
    })

    return players
}

const DEFAULT_CONFIG: Config = {
    allowJoker: false,
    endsAt: 15,
    gameType: 'paulista'
}

class TrucoGame {
    numPlayers: number
    config: Config
    players: Player[]

    constructor(numPlayers, config = DEFAULT_CONFIG) {
        this.numPlayers = numPlayers
        this.config = config
        this.players = players
    }

    createTable() {

        

    }

    _combineCards() {
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
    

    _shuffleCards(cards: Card[]) {

        for (let i = cards.length - 1; i >= 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }
    }
}
