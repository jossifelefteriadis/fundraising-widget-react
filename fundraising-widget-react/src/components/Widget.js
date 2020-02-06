import React from 'react'
import Header from './Header'
import Tooltip from './Tooltip'
import BoxFrame from './BoxFrame'

export default class Widget extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Tooltip />
        <BoxFrame />
      </div>
    )
  }
}
