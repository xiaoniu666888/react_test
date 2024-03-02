import React, { Component } from 'react'
import Tabbar from './tab-bar'
import Tabbar2 from './tab-bar2'
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
                <hr />

                <div>
                    <Tabbar2
                        leftSlot={<button>按钮2</button>}
                        centerSlot={<h2>我是标题2</h2>}
                        rightSlot={<i>我是i元素2</i>}
                    />
                </div>
            </div>
        )
    }
}

export default App