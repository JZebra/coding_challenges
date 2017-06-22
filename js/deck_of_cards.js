export class Card {
    constructor(value, suit) {
        this.value = value;
        this.suit = suit;
        this.valueMap = {
            1: 'Ace',
            2: 'Two',
            3: 'Three',
            4: 'Four',
            5: 'Five',
            6: 'Six',
            7: 'Seven',
            8: 'Eight',
            9: 'Nine',
            10: 'Ten',
            11: 'Jack',
            12: 'Queen',
            13: 'King',
        }
    }

    toString() {
        return `${this.valueMap[this.value]} of ${this.suit}`;
    }
}

export class Deck {
    constructor() {
        this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
        this.values = []
        for (var i = 1; i < 14; i++) {
            this.values.push(i)
        }
        this.cards = this.generateCards(this.suits, this.values);
    }

    // Creates a Card for each suit/value combination
    generateCards(suits, values) {
        let cards = [];
        for (let suit in suits) {
            for (let value in values) {
                cards.push(new Card(value, suit));
            }
        }
        return cards;
    }


}
