export type Card = {

    number: Value
    suit: Suit
    value?: string
}

export type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades'

export type Value = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A'