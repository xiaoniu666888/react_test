import React, { Component } from 'react'
export class index extends Component {
    render() {
        const { leftSlot, rightSlot, centerSlot } = this.props
        return (

            <div className='tab_bar'>
                <div className="left">{leftSlot}</div>
                <div className="center">{centerSlot}</div>
                <div className="right">{rightSlot}</div>
            </div>
        )
    }
}

export default index