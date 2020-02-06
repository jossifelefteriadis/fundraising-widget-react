import React from 'react'

const Tooltip = props => (
  <section className='tooltip'>
    <strong id='fundraise_remainingText'>{props.state.percentFunded}%</strong>{' '}
    of the goal funded
  </section>
)

export default Tooltip
