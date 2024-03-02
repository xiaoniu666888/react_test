import React, { Component } from 'react'
import AddChild from './AddChild'
import SubChild from './SubChild'
export class App extends Component {
    constructor() {
        super()
        this.state = {
            title: '传给子组件的标题',
            counter: 100
        }
    }

    changeCount(count) {
        this.setState({ counter: this.state.counter + count })
    }
    render() {
        const { title, counter } = this.state
        return (
            <div>
                <div>
                    <span>父组件：</span>
                    <span>{counter}</span>
                </div>
                <hr />
                <AddChild title={title} addClick={(count) => this.changeCount(count)} />
                <hr />
                <SubChild subClick={(count) => this.changeCount(count)} />
            </div>
        )
    }
}

export default App