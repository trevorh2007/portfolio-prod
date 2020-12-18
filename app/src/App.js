import React from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import HomePage from './components/home-page/home-page'
import NavBar from './components/nav-bar/nav-bar'

const App = () => {
  return(
    <div className="App">
      <NavBar />
      <Container>
        <HomePage />
      </Container>
    </div>
  )
}

export default App