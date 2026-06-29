import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './Home';
import PageNotFound from './components/sections/PageNotFound';

function App() {
  return (
    <Router>
      {/* Agar ScrollToTop file copy ki hai toh ise rehnedo, nahi toh delete kar sakte ho */}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App;