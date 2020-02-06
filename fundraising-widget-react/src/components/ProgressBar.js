import React from 'react'

const ProgressBar = props => (
  <section className='progressBar_container'>
    <section
      className='progressBar_bar inProgress'
      style={{ width: `${props.state.percentFunded}%` }}
    ></section>
  </section>
)

export default ProgressBar
