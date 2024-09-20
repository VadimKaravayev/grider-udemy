#[derive(Debug)]
struct Account {
    id: u32,
    balance: i32,
    holder: String,
}

impl Account {
    fn new(id: u32, holder: String) -> Self {
        Account {
            id,
            holder,
            balance: 0,
        }
    }

    fn deposit(&mut self, amount: i32) -> i32 {
        self.balance += amount;
        self.balance
    }

    fn withdraw(&mut self, amount: i32) -> i32 {
        self.balance -= amount;
        self.balance
    }

    fn summary(&self) -> String {
        format!("{} has amount of {}", self.holder, self.balance)
    }
}

#[derive(Debug)]
struct Bank {
    accounts: Vec<Account>,
}

impl Bank {
    fn new() -> Self {
        Bank { accounts: vec![] }
    }

    fn add_account(&mut self, account: Account) {
        self.accounts.push(account);
    }

    fn total_balance(&self) -> i32 {
        self.accounts.iter().map(|acc| acc.balance).sum()
    }

    fn summary(&self) -> Vec<String> {
        self.accounts
            .iter()
            .map(|acc| acc.summary())
            .collect::<Vec<String>>()
    }
}

fn main() {
    let mut bank = Bank::new();
    let mut account = Account::new(1, String::from("John Doe"));

    account.deposit(2000);
    account.withdraw(50);
    println!("{}", account.summary());
    bank.add_account(account);

    println!("{:#?}", bank);
    println!("All accounts sum: {}", bank.total_balance());
    println!("Bank summary: {:#?}", bank.summary());
}
