import React from 'react'
import ProgressBar from './ProgressBar'
import BoxFrameContent from './BoxFrameContent'

const BoxFrame = props => (
  <section className='boxFrame'>
    <ProgressBar state={props.state} />
    <BoxFrameContent
      state={props.state}
      getAmount={props.getAmount}
      correctInput={props.correctInput}
      wrongInput={props.wrongInput}
      closeSuccessMessage={props.closeSuccessMessage}
    />
  </section>
)

export default BoxFrame
