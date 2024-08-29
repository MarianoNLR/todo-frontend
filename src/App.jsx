import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { AuthProvider } from './components/AuthProvider.jsx'
import { Authentication } from './pages/Authentication/Authentication.jsx'

function App() {

  return (
    <AuthProvider>
      <Routes>
        <Route index path='/' element={<Home />}></Route>
        <Route path='/authentication' element={<Authentication />}></Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
