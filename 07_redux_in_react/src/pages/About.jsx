import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumberAction, subNubmerAction } from '../store/actionCreators'
export class About extends PureComponent {

    changeNumber(num, isAdd) {
        if (isAdd) {
            this.props.addNumber(num)

        } else {
            this.props.subNumber(num)
        }
    }
    render() {
        const { counter, bannerList, recommends } = this.props
        return (
            <div>
                About: {counter}
                <br />
                <button onClick={() => this.changeNumber(100, true)}>+100</button>
                <button onClick={() => this.changeNumber(100)}>-100</button>
                <ul>商品介绍: {
                    recommends.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.title}
                            </li>
                        )
                    })
                } </ul>
                <ul>商品介绍:{
                    bannerList.map((item, index) => {
                        return (
                            <li key={index}>
                                {item.title}
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        )
    }
}
// 映射state
const mapState = (state) => ({
    counter: state.counter,
    bannerList: state.bannerList,
    recommends: state.recommends
})

// 映射dispatch
const mapDispatch = (dispatch) => ({
    addNumber(num) {
        dispatch(addNumberAction(num))
    },
    subNumber(num) {
        dispatch(subNubmerAction(num))
    }
})

export default connect(mapState, mapDispatch)(About)