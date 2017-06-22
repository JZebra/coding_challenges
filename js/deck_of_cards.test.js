import { Card, Deck } from './deck_of_cards';

describe('Card', () => {
    let card;
    beforeEach(() => {
        card = new Card(4, 'Hearts');
    });

    test('creates a card with the correct suit', () => {
        expect(card.suit).toBe('Hearts');
    });

    test('creates a card with the correct value', () => {
        expect(card.value).toBe(4);
    });

    test('toString correctly converts a number value to a string value', () => {
        expect(String(card)).toBe('Four of Hearts');
        let card1 = new Card(13, 'Spades');
        expect(String(card1)).toBe('King of Spades');
        let card2 = new Card(1, 'Clubs');
        expect(String(card2)).toBe('Ace of Clubs');
    });
});

describe('Deck', () => {
    let deck;
    beforeEach(() => {
        deck = new Deck();
    })

    test('creates 52 cards', () => {
        expect(deck.cards.length).toBe(52);
    });

    test('each of the cards are unique', () => {
        // TODO: surely there's a built in Array.unique function?
        let seenCards = {};
        for (let card in deck.cards) {
            if (String(card) in seenCards) {
                // force test fail
                expect(false).toBe(true)
            } else {
                seenCards[String(card)] = null
            }
        }
    });
})
