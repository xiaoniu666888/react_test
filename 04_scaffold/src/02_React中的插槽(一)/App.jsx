import React, { Component } from 'react'
import Tabbar from './tab-bar'
export class App extends Component {
    render() {
        return (
            <div>
                App组件
                <div>
                    <Tabbar>
                        <button>按钮</button>
                        <h2>我是标题</h2>
                        <i>我是i元素</i>
                    </Tabbar>
                </div>
            </div>
        )
    }
}

export default App