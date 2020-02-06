import React from 'react'
import ProgressBar from './ProgressBar'
import BoxFrameContent from './BoxFrameContent'

const BoxFrame = props => (
  <section>
    <ProgressBar />
    <BoxFrameContent state={props.state} getAmount={props.getAmount} />
    <p>{props.state.amountFunded}</p>
  </section>
)

export default BoxFrame
