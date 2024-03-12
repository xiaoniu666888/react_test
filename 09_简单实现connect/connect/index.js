// connect的参数
// 参数一: 函数
// 参数二：函数
// 返回值：函数 => 高阶组件
import { PureCompontent } from 'react'
import store from '../store'
function connect(mapStateToProps, mapDispatchToProps) {
    return function (WrapCompontent) {
        class NewCompontent extends PureCompontent {
            constructor(props) {
                super(props)
            }
            render() {
                const stateObj = mapStateToProps(store.getState())
                const dispatchObj = mapDispatchToProps(store.dispatch)
                return <WrapCompontent {...this.props} {...stateObj} {...dispatchObj} />
            }
        }
        return NewCompontent
    }
}