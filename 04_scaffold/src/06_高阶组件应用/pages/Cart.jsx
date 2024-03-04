import React, { PureComponent } from 'react'
import { login_auth } from '../utils/login_auth'

export class Cart extends PureComponent {
    render() {
        return (
            <div>Cart</div>
        )
    }
}

export default login_auth(Cart)