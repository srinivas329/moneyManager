// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <div className="Money-list">
      <div className="balance balance-color">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="image"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount" className="amount-text">
            Rs : {balance}
          </p>
        </div>
      </div>
      <div className="balance income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="image"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount" className="amount-text">
            Rs : {income}
          </p>
        </div>
      </div>
      <div className="balance expenses">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="image"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount" className="amount-text">
            Rs : {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
