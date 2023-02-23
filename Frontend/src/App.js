
import './App.css';
import Note from './component/Note';
// import { About } from './component/About';
import { Home } from './component/Home';
// import {BrowserRouter as Router, Route,Routes, Link} from "react-router-dom";
import { Navbar } from './component/Navbar';
// import { Alert } from '@mui/material';
import Alert from './component/Alert'

// import { Home } from './component/Home';
function App() {
  return (
    <>
      <div style={{}}>
        <Navbar />
        <Alert message="This is very good app"/>
        <div className='container' style={{}}>
          <Home />
        </div>
        <div className='container'>
          <Note/>

        </div>
      </div>
    </>
  );
}

export default App;
