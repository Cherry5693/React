import { useState } from 'react'
import './App.css'
import { Link ,BrowserRouter , Routes} from 'react-router-dom';
import Layout from './components/Layout';
import {Home} from './pages/Home.jsx';
import {About} from './pages/About.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/home" element={<Home />} /> {/* Default route */}
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
