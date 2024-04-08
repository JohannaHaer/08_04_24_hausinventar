import {Route, Routes} from 'react-router-dom'
import NavBar from '../components/navBar'
import Home from '../components/home'
import FurnitureGallery from '../components/furnitureGallery'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/furniture/:id' element={<FurnitureGallery/>}/>
      </Routes>

    </>
  )
}

export default App
