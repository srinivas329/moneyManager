// Write your code here
import './index.css'

const TransactionItem = props => {
  const {slicedList, updateList} = props
  const {title, amount, id, type} = slicedList

  const onclickDelete = () => {
    updateList(id)
  }

  return (
    <li className="transaction-list">
      <p className="list-items1">{title}</p>
      <p className="list-items">{amount}</p>
      <p className="list-items">{type}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        alt="delete"
        className="delete-img"
        data-testid="delete"
        onClick={onclickDelete}
      />
    </li>
  )
}

export default TransactionItem
