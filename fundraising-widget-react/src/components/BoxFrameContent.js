import React from 'react'
import ValidateAmount from '../utils/ValidateAmount'

export default class BoxFrameContent extends React.Component {
  getAmount = e => {
    e.preventDefault()
    const value = e.target.elements.amount.value
    if (ValidateAmount(value)) {
      e.target.elements.amount.value = ''
      this.props.getAmount(value)
    }
  }

  render() {
    return (
      <section>
        <p>
          BoxFrameContent (Days left, Funded Amount, Pledge form,
          success-notifications, error-notification)
        </p>
        <p>
          Only 3 days left to fund this project,{' '}
          <strong id='fundraise_currentFundingText'>
            ${this.props.state.amountFunded}
          </strong>{' '}
          has been raised towards the goal to raise{' '}
          <strong id='fundraise_goalText'> ${this.props.state.fundGoal}</strong>
          .
        </p>
        <p>
          Pledge money by entering the sum in the field below and press pledge,
          we already know your credit card details.
        </p>
        <form onSubmit={this.getAmount}>
          <input type='text' name='amount' />
          <input type='submit' value='Pledge' />
        </form>
      </section>
    )
  }
}
