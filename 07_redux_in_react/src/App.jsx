
import React, { PureComponent } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'
import store from '../src/store'
export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter: store.getState().counter
    }
  }
  componentDidMount() {
    // 只有数据发生变化时才会来到这里
    store.subscribe(() => {
      const state = store.getState()
      this.setState({ counter: state.counter })

    })
  }
  render() {
    const { counter } = this.state
    return (
      <div>
        <h2>App:{counter}</h2>
        <hr />
        <Home />
        <hr />
        <Profile />
      </div>

    )
  }
}

export default App