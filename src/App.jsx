import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Music from './Components/Music'
import Videos from './Components/Videos'
import About from './Components/About'
import './index.css'

function App() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </>
      
    )
}

export default App