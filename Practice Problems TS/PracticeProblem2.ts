/*

   Todo 0: Write a bank account class with following properties:

   * accountNumber: string
   * balance: number (private)
   * Should have following methods:

   * deposit:(amount :number): void (to add to balance)
   * withdraw: (amount: number): void (to subtract balance)
   * getBalance: (): number (to return current balance)

*/

class BankAccount {
  public accountNumber: string;
  private balance: number;

  constructor(accountNumber: string, balance: number) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(`Your current balance is: ${this.balance}`);
  }

  withdraw(amount: number): void {
    if (this.balance > 0) {
      this.balance -= amount;
      console.log(`Your current balance is: ${this.balance}`);
    } else if (this.balance <= 0) {
      console.log("Your balance is insufficient to get withdraw.");
    }
  }

  getBalance(): number {
    return this.balance;
  }
}

const UmarAccount = new BankAccount("umar-2007-03", 100000);
UmarAccount.deposit(100000);
UmarAccount.withdraw(50000);
console.log(UmarAccount.getBalance());

/*

   Todo 1: Create a employee class with inheritance:

   * Define a employee class with properties name and salary
   * Create a subclass Manager that adds a department property
   * Both classes should have a get detail method that returns a string with employee's details.

*/

class Employee {
  constructor(public name: string, public salary: number) {
    this.name = name;
    this.salary = salary;
  }

  getDetails(): void {
    console.log(
      `My name is: ${this.name}, I get ${this.salary}$ package from the company.`
    );
  }
}

class Manager extends Employee {
  constructor(name: string, salary: number, public department: string) {
    super(name, salary);
    this.department = department;
  }

  getDetails(): void {
    console.log(
      `I'm Manager in a company from department: ${this.department}, My name is ${this.name}, I get ${this.salary}$ package from company.`
    );
  }
}

const newEmployee = new Employee("John", 1000);
newEmployee.getDetails();

const nemManager = new Manager("Jack", 3000, "Sales");
nemManager.getDetails();