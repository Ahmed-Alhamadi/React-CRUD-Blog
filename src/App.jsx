
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Header'
import AddPost from './component/AddPost'
import Home from './component/Home'
import EditPost from './component/EditPost'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddPost />}/> 
        <Route path='/edit/:id' element={<EditPost />}/> 
        
      </Routes>
   
    </>
  )
}

export default App
