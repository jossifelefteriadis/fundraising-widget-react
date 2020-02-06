import React from 'react'

const ProgressBar = props => (
  <section className='progressBar_container'>
    <section
      className='progressBar_bar inProgress'
      style={
        props.state.percentFunded < 100
          ? { width: `${props.state.percentFunded}%` }
          : {
              width: `${props.state.percentFunded}%`,
              backgroundColor: '#1CBC2C'
            }
      }
    ></section>
  </section>
)

export default ProgressBar
