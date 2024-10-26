
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserHome from './components/UserHome';
import MedPost from './components/MedPost';
import ViewMedPost from './components/ViewMedPost';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/userhome' element={<UserHome/>}/>
        <Route path='/post' element={<MedPost/>}/>
        <Route path='/viewmedpost' element={<ViewMedPost/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
