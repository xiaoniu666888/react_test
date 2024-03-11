import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumber } from '../src/store/counter'
export class About extends PureComponent {
    changeNumber(num) {
        this.props.addNumber(num)
    }
    render() {
        const { counter } = this.props
        return (
            <div>About
                <h2>{counter}</h2>
                <button onClick={e => this.changeNumber(10)}> +10 </button>
            </div>
        )
    }
}
// 映射state
const mapState = (state) => ({
    counter: state.counter.counter,
})
// 映射dispatch
const mapDispath = (dispatch) => ({
    addNumber(num) {
        dispatch(addNumber(num))
    },
})
export default connect(mapState, mapDispath)(About)