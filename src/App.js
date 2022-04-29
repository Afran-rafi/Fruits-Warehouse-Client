import './App.css';
import { Route, Routes } from 'react-router-dom';
import Menubar from './Components/Menubar/Menubar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import PageError from './Components/PageError/PageError';

function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='' element></Route>
        <Route path='' element></Route>
        <Route path='signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<PageError></PageError>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
