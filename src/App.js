
import './App.css';
import {Route, Routes , BrowserRouter} from 'react-router-dom';
import  Landing from './pages/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/blog" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
