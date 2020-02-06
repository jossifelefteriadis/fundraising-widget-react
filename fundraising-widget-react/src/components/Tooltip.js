import React from 'react'

const Tooltip = props => (
  <section className='tooltip'>
    <strong>{props.state.percentFunded}%</strong> of the goal funded
  </section>
)

export default Tooltip
