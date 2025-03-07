/**
 * @typedef {Object} Card
 * @property {string} naipe - The suit of the card (e.g., 'espadas', 'copas', 'ouros', 'paus')
 * @property {string} number - The number or face of the card (e.g., '2', '3', 'J', 'A')
 */

/**
 * Gera todas as cartas de um baralho com base nos naipes e números.
 * 
 * @returns {Card[]} - Retorna um array com todas as cartas do baralho
 */
function combineCards() {
    const cards = []

    NAIPES.forEach(naipe => {
        CARDS_NUMBERS.forEach(number => {
            cards.push({
                naipe,
                number
            })
        })
    })

    return cards
}

/**
 * Embaralha um array de cartas.
 * 
 * @param {Card[]} cards - O array de cartas a ser embaralhado
 * @returns {Card[]} - Retorna o array de cartas embaralhadas
 */
function shuffleCards(cards) {
    return cards.sort(() => Math.random() - 0.5)
}

/**
 * Desenha (remove) uma carta do final do array.
 * 
 * @param {Card[]} cards - O array de cartas de onde a carta será retirada
 * @returns {Card} - A carta retirada do array
 */
function drawCard(cards) {
    return cards.pop()
}

/**
 * Desenha várias cartas de uma vez, a partir do final do array.
 * 
 * @param {Card[]} cards - O array de cartas de onde as cartas serão retiradas
 * @param {number} n - O número de cartas a ser retirado
 * @returns {Card[]} - Retorna um array com as cartas retiradas
 */
function drawNCards(cards, n) {
    return cards.splice(-n)
}

/**
 * Divide o baralho entre os jogadores.
 * 
 * @param {Card[]} cards - O array de cartas a ser dividido
 * @param {number} numPlayers - O número de jogadores
 * @returns {Card[][]} - Retorna um array de arrays de cartas, um para cada jogador
 */
function divideCards(cards, numPlayers) {
    const players = Array.from({ length: numPlayers }, () => [])

    cards.forEach((card, index) => {
        const playerIndex = index % numPlayers
        players[playerIndex].push(card)
    })

    return players
}

/**
 * @typedef {Object} TrucoGameConfig
 * @property {"Mineiro" | "Paulista"} gameMode - Modo de jogo (Mineiro ou Paulista)
 * @property {12 | 15} endGame - Pontos necessários para o fim do jogo
 * @property {boolean} allowJoker - Define se o coringa é permitido no jogo
 */

/**
 * Configuração padrão para o jogo Truco.
 * 
 * @type {TrucoGameConfig}
 */
const DEFAULT_CONFIG = {
    allowJoker: false,
    endGame: 15,
    gameMode: 'Paulista'
}

/**
 * Classe que representa um jogo de Truco.
 */
class TrucoGame {

    /**
     * Cria uma nova instância do jogo de Truco.
     * 
     * @param {number} numPlayers - O número de jogadores no jogo
     * @param {TrucoGameConfig} config - A configuração do jogo
     */
    constructor(numPlayers, config = DEFAULT_CONFIG) {
        this.numPlayers = numPlayers
        this.config = config
        this.cards = shuffleCards(combineCards())
        this.players = divideCards(this.cards, numPlayers)
    }

    createTable() {

        

    }
}
