import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import Allposts from './Components/Allposts';
import {Routes, Route, BrowserRouter as Router,Switch,Link, useNavigate} from 'react-router-dom';
import MakePost from './Components/MakePost';
import Signin from './Components/Signin';
import UpdatePost from './Components/UpdatePost';
import Fullpost from './Components/Fullpost';
import Delsuccess from './Components/Success';
import Updateimage from './Components/Updateimage';
import AddAdvertise from './Components/AddAdvertise';
function App() {
  return (
    <div className="App">
     

      <Router>
      <Navbar></Navbar>
          <Routes>
            <Route  path="/Makepost" element={<MakePost/>}> </Route>
            <Route   path="/" element={<Allposts/>} ></Route> 
            <Route path='/signin' element={<Signin/>}></Route>
            <Route path='/update/:id' element={<UpdatePost/>}></Route>
            <Route path='/FullPost/:id' element={<Fullpost/>}></Route>
            <Route path='/success/:text'  element={<Delsuccess/>}></Route>
            <Route path='/updateimage/:id'  element={<Updateimage/>}></Route>
            <Route path='/advertise'  element={<AddAdvertise/>}></Route>

          </Routes>
      </Router>
    
    </div>
  );
}

export default App;
