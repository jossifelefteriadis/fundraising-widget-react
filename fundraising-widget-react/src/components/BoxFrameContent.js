import React from 'react'
import ValidateAmount from '../utils/ValidateAmount'

export default class BoxFrameContent extends React.Component {
  getAmount = e => {
    e.preventDefault()
    const value = e.target.elements.amount.value
    if (ValidateAmount(value)) {
      e.target.elements.amount.value = ''
      this.props.getAmount(value)
      this.props.correctInput()
    } else {
      this.props.wrongInput()
    }
  }

  closeSuccessMessage = () => {
    this.props.closeSuccessMessage()
  }

  render() {
    return (
      <section className='boxFrame_content'>
        <p>
          Only 3 days left to fund this project,{' '}
          <strong>${this.props.state.amountFunded}</strong> has been raised
          towards the goal to raise{' '}
          <strong> ${this.props.state.fundGoal}</strong>.
        </p>
        <p>
          Pledge money by entering the sum in the field below and press pledge,
          we already know your credit card details.
        </p>
        {this.props.state.showInput && (
          <form onSubmit={this.getAmount} className='fundraise_form'>
            <input
              className='fundraise_amount'
              type='text'
              name='amount'
              autoComplete='off'
            />
            <input
              type='submit'
              value='Pledge'
              className='fundraise_pledgeButton'
            />
          </form>
        )}
        {this.props.state.inputValue && (
          <section className='notification notification-success'>
            Thank you for your pledge!{' '}
            <a href='/#' onClick={this.closeSuccessMessage}>
              Close
            </a>
          </section>
        )}
        {this.props.state.inputValue === false && (
          <section className='notification notification-error'>
            We only accept full numbers.
          </section>
        )}
      </section>
    )
  }
}
