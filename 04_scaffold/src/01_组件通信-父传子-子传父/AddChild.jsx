import React, { Component } from 'react'

export class AddChild extends Component {
    addCount(count) {
        this.props.addClick(count)
    }
    render() {
        const { title } = this.props
        return (
            <div>
                子增加组件
                <div>{title}</div>
                <button onClick={() => this.addCount(1)}>+1</button>
                <button onClick={() => this.addCount(5)}>+5</button>
                <button onClick={() => this.addCount(10)}>+10</button>
            </div>

        )
    }
}

export default AddChild