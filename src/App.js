import Home from './Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from 'react-router-dom';
import './App.css';

import { StoreProvider } from './StoreContext';
import Navbar from './Navbar/Navbar';

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      
    </StoreProvider>
  );
}

export default App;
