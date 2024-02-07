

import './App.scss'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Recipes from './components/Recipes/Recipes'
import Work from './components/Work/Work'
import Testymonials from './components/testymonials/Testymonials'

function App() {


  return (
    <div className='app'>
    
    <Home/>
    <Work/>
    <About/>
    <Recipes />
    <Testymonials/>
    <Contact/>
  

    </div>
  )
}

export default App
