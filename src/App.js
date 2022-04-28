import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menubar from './Components/Menubar/Menubar';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
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
