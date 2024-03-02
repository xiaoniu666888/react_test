import React, { Component } from 'react'

export class SubChild extends Component {
    subCount(count) {
        this.props.subClick(-count)
    }
    render() {
        return (
            <div>
                <div>子减少组件</div>
                <button onClick={() => this.subCount(1)}>1</button>
                <button onClick={() => this.subCount(5)}>5</button>
                <button onClick={() => this.subCount(10)}>10</button>
            </div>

        )
    }
}

export default SubChild