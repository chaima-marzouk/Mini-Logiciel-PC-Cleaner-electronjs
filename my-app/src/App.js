import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path='/' element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
