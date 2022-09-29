

import {BrowserRouter} from 'react-router-dom'
import { Route, Routes} from 'react-router-dom'
import Home from './component/Main/Home';
import Message from './component/Main/Message';
import Profile from './component/Main/Profile';
import Login from './component/services/Login';
import SignUp from './component/services/SignUp';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Login/>}/>
  <Route path="/signUp" element={<SignUp/>}/>
  <Route path="/Home" element={<Home/>}/>
  <Route path="/Message" element={<Message/>}/>
  <Route path="/Profile" element={<Profile/>}/>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
