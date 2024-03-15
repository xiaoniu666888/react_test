import React, { memo } from 'react'
import useLocalStorage from './hooks'
const App = memo(() => {
  const [token, setToken] = useLocalStorage("token");
  function setTokenHandle() {
    setToken("xiaoniu")
  }

  return (
    <div>
      <h2>{token}</h2>
      <button onClick={setTokenHandle}>设置token</button>
    </div>
  )
})

export default App