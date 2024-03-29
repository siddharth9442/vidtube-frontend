import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './components/Header/Navigation'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
