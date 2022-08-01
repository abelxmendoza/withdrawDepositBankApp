

const inputAmount = document.getElementById("amount")
const depositButton = document.getElementById("deposit")
const withdrawlButton = document.getElementById("withdrawl")
const displayBalance = document.getElementById("balance")



class Bank {

  constructor(balance) {

    this.balance = balance

    displayBalance.innerText = `Balance: ${balance}`
  }

  withdraw(amount) {



    this.balance = this.balance - amount

    if (this.balance == 0) {
      console.log('No more funds')
      return 0
    }

    if (this.balance <= 0) {
      console.log('Not enough Money to withdraw')
      return 0
    }


    console.log(`Withdrawl: ${amount}`)
    console.log(`Balance: ${this.balance}`)

    displayBalance.innerText = `Balance: ${this.balance}`

    return this.balance

  }

  deposit(amount) {

    this.balance = this.balance + amount
    console.log(`Deposit: ${amount}`)
    console.log(`Balance: ${this.balance}`)

    displayBalance.innerText = `Balance: ${this.balance}`

    return this.balance

  }
}

const abelsBank = new Bank(5000)


depositButton.onclick = () => {

  abelsBank.deposit(Number(inputAmount.value))

  //console.log(abelsBank.deposit(Numner(inputAmount))
}


withdrawlButton.onclick = () => {

  abelsBank.withdraw(Number(inputAmount.value))

  //console.log(abelsBank.withdraw(Number(inputAmount))
}


/*
console.log(abelsBank)
console.log(abelsBank.withdraw(inputAmount))

console.log(abelsBank.deposit(inputAmount))

console.log(abelsBank.withdraw(inputAmount))

*/