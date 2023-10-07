// import Transferdata from './components/Transferdata';
import Login from './components/Login/Login';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Course from './components/course/Course';
import Logindata from './components/Login/Logindata';
import Home from './components/Home/Home';
import Book from './components/Book/Book';
function App() {
  return (
    <div>

     <BrowserRouter>
     <Routes>
      <Route path={'/'} element={<Login/>}></Route>
      <Route path={'/Ldata'} element={<Logindata/>}></Route>
      <Route path={'/Lcorse'} element={<Course/>}></Route>
      <Route path={'/LHome'} element={<Home/>}></Route>
      <Route path={'/book'} element={<Book/>}></Route>
      
      
     </Routes>
     </BrowserRouter>
     

{/* <Home></Home> */}
    </div>
  );
}

export default App;
