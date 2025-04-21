import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import { Landing } from './pages/Landing'
import MainPage from './pages/Main'

function App() {
  return (
    <div className='font-custom'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;