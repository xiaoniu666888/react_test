import React, { Component } from 'react'
import Home from './Home'
import ThemeContext from './context'
import UserContext from './context/user'
import Profile from './Profile'
export class App extends Component {
    render() {
        return (
            <div>
                <h2>App</h2>
                <hr />
                <UserContext.Provider value={{ name: '来自祖先App的user数据' }}>
                    <ThemeContext.Provider value={{ name: '来自祖先App的数据' }}>
                        <Home />
                    </ThemeContext.Provider>
                </UserContext.Provider>
                <hr />
                <Profile />
            </div>
        )
    }
}

export default App