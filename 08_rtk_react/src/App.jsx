import React, { PureComponent } from 'react'
import About from './About'

export class App extends PureComponent {
  render() {
    return (
      <div>
        App
        <hr />
        <About></About>
      </div>

    )
  }
}

export default App