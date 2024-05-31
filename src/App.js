import './App.css';
import Connect from './Final'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          
          <Route path='/' element={<Connect/>} />
          <Route path='search' element={<h1>search</h1>}/>
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;