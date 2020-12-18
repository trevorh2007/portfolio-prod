import React, { useState, useEffect } from 'react'
import './App.css'
import Button from './components/button/button'

const App = () => {
  const [name, setName] = useState('World');

  useEffect(() => {
    document.title = `Hello, ${name}`
  })
  return (
    <div className="App">
      <h1>Hello, {name}!</h1>
      <button onClick={() => setName('Trevor')}>
        Click me to change the name
      </button>
      <Button label="click me please"></Button>
    </div>
  )
}

export default App