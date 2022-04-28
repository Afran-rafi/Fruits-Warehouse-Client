import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menubar from './Components/Menubar/Menubar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App mb-5">
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
      <Footer></Footer>
    </div>
  );
}

export default App;
