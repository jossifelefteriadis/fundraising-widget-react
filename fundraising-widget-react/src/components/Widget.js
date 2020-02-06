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
      amountFunded: 0,
      showInput: true,
      inputValue: undefined
    }
  }

  getAmount = amount => {
    const parsedAmount = parseInt(amount)
    this.setState(
      prevState => ({
        amountFunded: prevState.amountFunded + parsedAmount
      }),
      () => {
        this.updatePercent(this.state.amountFunded)
      }
    )
  }

  updatePercent = amount => {
    const fundGoal = this.state.fundGoal
    const percent = (amount / fundGoal) * 100
    console.log(fundGoal)
    if (amount < fundGoal) {
      this.setState(() => ({
        percentFunded: percent.toFixed(0)
      }))
      //update progressBar
    } else {
      this.setState(() => ({
        percentFunded: percent.toFixed(0)
      }))
      // Make progressBar green
    }
  }

  showInputField = () => {
    this.setState(prevState => ({
      showInput: !prevState.showInput
    }))
  }

  correctInput = () => {
    this.setState(() => ({
      inputValue: true
    }))
    this.showInputField()
  }

  wrongInput = () => {
    this.setState(() => ({
      inputValue: false
    }))
  }

  closeSuccessMessage = () => {
    this.setState(() => ({
      inputValue: undefined
    }))
    this.showInputField()
  }

  render() {
    return (
      <div>
        <Header />
        <Tooltip state={this.state} />
        <BoxFrame
          state={this.state}
          getAmount={this.getAmount}
          correctInput={this.correctInput}
          wrongInput={this.wrongInput}
          closeSuccessMessage={this.closeSuccessMessage}
        />
      </div>
    )
  }
}
