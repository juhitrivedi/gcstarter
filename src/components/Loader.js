import React, { Component } from 'react'

class Loader extends Component {
  render() {
    return (
      <div className="loader-box">
        <div class="lds-ripple"><div/><div/></div>
      </div>
    )
  }
}

export default Loader
