import React, { Component } from 'react'
import ThemeContext from './context'
export class Profile extends Component {
    render() {
        const { name } = this.context
        return (
            <div>
                <h2>Profile</h2>
                <h5>
                    来自App的默认数据: {name}
                </h5>

            </div>
        )
    }
}
Profile.contextType = ThemeContext
export default Profile