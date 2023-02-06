import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    transactionList: [],
    title: '',
    amount: '',
    type: '',
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  addTransaction = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    const newItem = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newItem],
      title: '',
      amount: '',
      type: '',
    }))
  }

  updateList = id => {
    const {transactionList} = this.state

    const filteredList = transactionList.filter(each => each.id === id)

    this.setState({transactionList: filteredList})
  }

  getExpenses = () => {
    const {transactionList} = this.state
    let expenses = 0

    transactionList.forEach(each => {
      if (each.type === 'Expenses') {
        expenses += each.amount
      }
    })
    return expenses
  }

  getIncome = () => {
    const {transactionList} = this.state

    let income = 0
    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += each.amount
      }
    })
    return income
  }

  getBalance = () => {
    const {transactionList} = this.state

    let balance = 0
    let income = 0
    let expenses = 0

    transactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        income += each.amount
      } else {
        expenses += each.amount
      }
    })
    balance = income - expenses

    return balance
  }

  render() {
    const {transactionList, title, amount} = this.state
    const slicedList = transactionList
    const balance = this.getBalance()
    const income = this.getIncome()
    const expenses = this.getExpenses()

    return (
      <div className="bg-container">
        <div className="card">
          <div className="top-card">
            <h1>Hi, Richard</h1>
            <p>
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <div className="middle-card">
            <MoneyDetails
              balance={balance}
              income={income}
              expenses={expenses}
            />
          </div>
          <div className="bottom-card">
            <div className="transaction-card">
              <h1> Add Transaction </h1>
              <form className="t-card" onSubmit={this.addTransaction}>
                <label htmlFor="name">TITLE</label>
                <input
                  className="input"
                  placeholder="TITLE"
                  onChange={this.onChangeTitle}
                  value={title}
                  type="text"
                  id="name"
                />
                <br />
                <label htmlFor="amount">AMOUNT</label>
                <input
                  className="input"
                  placeholder="AMOUNT"
                  onChange={this.onChangeAmount}
                  value={amount}
                  id="amount"
                  type="text"
                />
                <br />
                <label htmlFor="type">TYPE</label>
                <select
                  onChange={this.onChangeType}
                  className="input"
                  id="type"
                >
                  {transactionTypeOptions.map(each => (
                    <option value={each.displayText}>{each.displayText}</option>
                  ))}
                </select>
                <br />
                <button className="button-add" type="submit">
                  Add
                </button>
              </form>
            </div>
            <ul className=" history-card">
              <h1>History</h1>
              <div className="history-heading">
                <p className="history-names">Title</p>
                <p className="history-names">Amount</p>
                <p className="history-names">Type</p>
                <p> </p>
              </div>
              <li className="ul-list">
                {slicedList.map(each => (
                  <TransactionItem
                    updateList={this.updateList}
                    slicedList={each}
                    key={each.id}
                  />
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
