import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './Home';

function App() {
  return (
    <Router>
      {/* Agar ScrollToTop file copy ki hai toh ise rehnedo, nahi toh delete kar sakte ho */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Baaki sab login/register routes ka kissa khatam */}
      </Routes>
    </Router>
  )
}

export default App;