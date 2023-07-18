class Account {
     balance: number;

    constructor(balance: number = 0) {
      this.balance = balance;
    }
  
     getBalance(): number {
      return this.balance;
    }
  
     deposit(amount: number): void {
      this.balance += amount;
    }
  
     withdraw(amount: number): void {
      if (this.balance >= amount) {
        this.balance -= amount;
      } else {
        console.log("Saldo insufficiente.");
      }
    }
  }
  
  class SonAccount extends Account {
     oneDeposit(amount: number): void {
      this.deposit(amount);
    }
  
     oneWithDraw(amount: number): void {
      this.withdraw(amount);
    }
  }
  
  class MotherAccount extends Account {
     addInterest(): void {
      const interest = this.balance * 0.1;
      this.deposit(interest);
    }
  
     twoDeposit(amount: number): void {
      this.deposit(amount);
    }
  
     twoWithDraw(amount: number): void {
      this.withdraw(amount);
    }
  }
  
  const sonAccount = new SonAccount();
  sonAccount.oneDeposit(100);
  sonAccount.oneWithDraw(50);
  
  const motherAccount = new MotherAccount(500);
  motherAccount.twoDeposit(200);
  motherAccount.twoWithDraw(50);
  motherAccount.addInterest();
  
  console.log("Saldo conto SonAccount:", sonAccount.getBalance());
  console.log("Saldo conto MotherAccount:", motherAccount.getBalance());
  