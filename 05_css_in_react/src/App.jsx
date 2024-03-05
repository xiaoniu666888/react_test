import React, { PureComponent } from 'react'
import { AppWraper } from './styles'
export class App extends PureComponent {
  render() {
    return (
      <AppWraper>
        <div className='title'>
          App
          <button className='button'>
            按钮
          </button>
        </div>
      </AppWraper>

    )
  }
}

export default App