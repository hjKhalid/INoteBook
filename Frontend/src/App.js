
import './App.css';
// import Note from './component/Note';
import { Home } from './component/Home';
import { Navbar } from './component/Navbar';

import Alert from './component/Alert'

function App() {
  return (
    <>
      <div style={{}}>
        <Navbar />
        <Alert message="This is very good app"/>
        <div className='container' style={{}}>
          <Home />
        </div>
      
      </div>
    </>
  );
}

export default App;
