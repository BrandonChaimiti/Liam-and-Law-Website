// Import necessary modules and components
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Provides routing functionalities
import Home from './Components/Home'; // Home component for the root route
import Music from './Components/Music'; // Music component for the /music route
import Videos from './Components/Videos'; // Videos component for the /videos route
import About from './Components/About'; // About component for the /about route
import './index.css'; // Import global styles for the application

// Main App component
function App() {
    return (
      <>
        {/* Router wraps all the routes, enabling navigation between components */}
        <Router>
          <Routes>
            {/* Define routes and their corresponding components */}
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </>
    );
}

// Export the App component as the default export
export default App;
