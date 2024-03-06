import React, { PureComponent } from 'react'
import store from '../store'
import { subNubmerAction } from '../store/actionCreators'
export class Profile extends PureComponent {
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
    sunCount(num) {
        store.dispatch(subNubmerAction(num))
    }
    render() {
        const { counter } = this.state
        return (
            <div>
                <span>Profile : {counter}</span>
                <br />
                <button onClick={() => this.sunCount(5)}>-5</button>
                <button onClick={() => this.sunCount(10)}>-10</button></div>
        )
    }
}

export default Profile