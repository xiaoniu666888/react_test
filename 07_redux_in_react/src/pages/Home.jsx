import React, { PureComponent } from 'react'
import store from '../store'
import { addNumberAction } from '../store/actionCreators'
export class Home extends PureComponent {
    constructor() {
        super()
        this.state = {
            counter: store.getState().counter
        }
    }
    componentDidMount() {
        store.subscribe(() => {
            const state = store.getState()
            this.setState({ counter: state.counter })

        })
    }
    addCount(num) {
        store.dispatch(addNumberAction(num))
    }
    render() {
        const { counter } = this.state
        return (
            <div>
                <span>
                    Home: {counter}
                </span>
                <br />
                <button onClick={() => this.addCount(5)}>+5</button>
                <button onClick={() => this.addCount(10)}>+10</button>
            </div>
        )
    }
}

export default Home