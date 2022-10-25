import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Cert } from './components/certification/cert';
import { Dash } from './components/Dashboard/dashboard';
import { Edu } from './components/Education/edu';
import { Nav1 } from './components/Navbar/nav1';
import { Profile } from './components/profile/profile';
import { Login } from './components/sign_components/login';
import { Signup } from './components/sign_components/signup';
import { Skill } from './components/skills/skills';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/Dashboard' element={<Dash/>}/> 
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/edu' element={<Edu/>} />
          <Route path='/skill' element={<Skill/>}/>
          <Route path='/cert' element={<Cert/>} />
        </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
