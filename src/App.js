
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import UserHome from './components/UserHome';
import MedPost from './components/MedPost';
import ViewMedPost from './components/ViewMedPost';
import FudPost from './components/FudPost';
import FundHome from './components/FundHome';
import ViewFoodPost from './components/ViewFoodPost';
import CampPost from './components/CampPost';

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
        <Route path='/fudpost' element={<FudPost/>}/>
        <Route path='/viewfudpost' element={<ViewFoodPost/>}/>
        <Route path='/fundhome' element={<FundHome/>}/>
        <Route path='/camppost' element={<CampPost/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
