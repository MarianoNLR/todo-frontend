import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home.jsx'
import { AuthProvider } from './components/AuthProvider.jsx'
import { Authentication } from './pages/Authentication/Authentication.jsx'
import Layout  from './components/Layout/Layout.jsx'
import { TaskView } from './pages/TaskView/TaskView.jsx'
function App() {

  return (
    <AuthProvider>
      <Layout>
      <Routes>
        <Route index path='/' element={<Home />}></Route>
        <Route path='/authentication' element={<Authentication />}></Route>
        <Route path='/task/:taskId' element={<TaskView />}></Route>
      </Routes>
      </Layout>
    </AuthProvider>
  )
}

export default App
