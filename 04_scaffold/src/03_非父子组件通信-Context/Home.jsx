import React, { Component } from 'react'
import HomeInfo from './HomeInfo'

export class Home extends Component {
    render() {
        return (
            <div>
                <h3>Home(App的儿子)</h3>
                <hr />
                <HomeInfo />
            </div>
        )
    }
}

export default Home