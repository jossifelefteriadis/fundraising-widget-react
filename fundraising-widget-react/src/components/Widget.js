import React from 'react'
import Header from './Header'
import Tooltip from './Tooltip'
import BoxFrame from './BoxFrame'

export default class Widget extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fundGoal: 1000,
      percentFunded: 0,
      amountFunded: 0
    }
  }

  getAmount = amount => {
    const parsedAmount = parseInt(amount)
    this.setState(prevState => ({
      amountFunded: prevState.amountFunded + parsedAmount
    }))
  }

  render() {
    return (
      <div>
        <Header />
        <Tooltip state={this.state} />
        <BoxFrame state={this.state} getAmount={this.getAmount} />
      </div>
    )
  }
}
