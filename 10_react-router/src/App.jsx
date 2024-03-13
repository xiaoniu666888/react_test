import React, { PureComponent } from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Profile from './pages/Profile'
import Home from './pages/Home'
import withRouter from './hoc'
export class App extends PureComponent {

  render() {
    const { navigate } = this.props.router
    return (
      <div>App

        <hr />
        <Link to='/about'>关于</Link>
        <Link to='/profile'>个人中心</Link>
        <button onClick={() => navigate('/home')}>跳转Home</button>
        <hr />
        <Routes>
          <Route path='/' element={<Navigate to='/about' />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Routes>
      </div>

    )
  }
}

export default withRouter(App)