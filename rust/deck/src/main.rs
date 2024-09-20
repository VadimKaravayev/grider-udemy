use rand::{seq::SliceRandom, thread_rng};

#[derive(Debug)]
struct Deck {
    cards: Vec<String>,
}

impl Deck {
    fn new() -> Self {
        let suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
        let values = ["two", "three", "four"];
        let mut cards: Vec<String> = vec![];
        for suit in suits {
            for value in values {
                let card = format!("{} of {}", value, suit);
                cards.push(card);
            }
        }

        Deck { cards }
    }

    fn shuffle(&mut self) {
        let mut rng = thread_rng();
        self.cards.shuffle(&mut rng);
    }

    fn deal(&mut self, num_card: usize) -> Vec<String> {
        self.cards.split_off(self.cards.len() - num_card)
    }
}

fn main() {
    //Use array when you don't expect your list to change in size. This is a good message for other devs
    let mut deck = Deck::new();
    println!("Here is your deck {:#?}", deck);
    deck.shuffle();
    println!("Here is your deck {:#?}", deck);
    println!("Dealt cards {:#?}", deck.deal(2));
}
