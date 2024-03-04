import React, { PureComponent } from 'react'
import Cart from './Cart'

export class Profile extends PureComponent {
    constructor() {
        super()
        this.state = {
            isLogin: false
        }
    }
    handleClick() {
        localStorage.setItem("token", "xiaoniu")
        this.setState({ isLogin: true })
    }
    render() {
        return (
            <div>
                <div>
                    <button onClick={() => this.handleClick()}>token</button>
                </div>
                Profile
                <Cart />
            </div>
        )
    }
}

export default Profile