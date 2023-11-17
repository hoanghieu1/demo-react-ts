import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
// import Footer from './components/elements/Footer'
// import Header from './components/elements/Header'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import Layout from './components/elements/Layout'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='/' element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
          <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
