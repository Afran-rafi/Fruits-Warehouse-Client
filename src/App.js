import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menubar from './Components/Menubar/Menubar';

function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <Routes>
        <Route path='' element></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
      </Routes>
    </div>
  );
}

export default App;
