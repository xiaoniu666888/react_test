import React, { Component } from 'react'
import ThemeContext from './context'
import UserContext from './context/user'
export class HomeInfo extends Component {
    render() {
        const { name } = this.context
        return (
            <div>
                <h4>HomeInfo(App的孙子)</h4>
                <h5>
                    来自App的数据1: {name}
                </h5>
                <div>
                    <UserContext.Consumer>
                        {
                            (value) => {
                                return (<h5> 来自App的数据2:  {value.name} </h5>)
                            }
                        }
                    </UserContext.Consumer>
                </div>
            </div>
        )
    }

}
HomeInfo.contextType = ThemeContext

export default HomeInfo