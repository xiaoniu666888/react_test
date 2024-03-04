import React, { PureComponent } from 'react'
import Profile from './pages/Profile'
export class App extends PureComponent {
    render() {
        return (
            <div>
                <h2>App</h2>
                <Profile />
            </div>
        )
    }
}

export default App