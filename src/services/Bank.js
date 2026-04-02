class Bank {
  constructor() {
    this.accounts = {};
  }

  createAccount(accNo, balance) {
    if (this.accounts[accNo]) return "Account already exists";
    this.accounts[accNo] = balance;
    return "Account created";
  }

  getBalance(accNo) {
    return this.accounts[accNo] ?? "Account not found";
  }

  transfer(from, to, amount) {
  if (from === to) {
    return "❌ Cannot transfer to the same account";
  }

  if (!this.accounts[from] || !this.accounts[to]) {
    return "❌ Invalid account";
  }

  if (this.accounts[from] < amount) {
    return "❌ Insufficient balance";
  }

  this.accounts[from] -= amount;
  this.accounts[to] += amount;

  return "✅ Transfer successful";
}
  getAllAccounts() {
  return this.accounts;
}
}

export default new Bank();