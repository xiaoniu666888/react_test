import React, { PureComponent } from 'react'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }
    handleForm(event) {
        event.preventDefault()
        console.log(this.state.username);
    }
    handleUserChange(event) {
        this.setState({ username: event.target.value })
    }
    render() {
        const { username } = this.state
        return (
            <div>
                <div>
                    <form onSubmit={(e) => this.handleForm(e)}>
                        <label htmlFor="username">
                            <input
                                id='username'
                                type="text"
                                value={username}
                                onChange={(e) => this.handleUserChange(e)}
                            />
                        </label>
                        <button type='submit'>提交</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default App