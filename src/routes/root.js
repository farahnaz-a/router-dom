import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'; 
import { About } from '../components/About/About';
import Home from '../components/Home/Home';
import RootLayout, { preLoader } from '../components/Layouts/RootLayout';
import Login, { login } from '../components/Login/Login';
import Logout from '../components/Logout/Logout';
import Users, { users } from '../components/Users/Users';


export const router = createBrowserRouter(

   createRoutesFromElements(
            <Route path='/' element={<RootLayout/>} loader={preLoader}>
                <Route index element={<Home />}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/login' action={login}  element={<Login/>}/>
                <Route path='/users' loader={users} element={<Users/>}/>
                <Route path='/logout' element={<Logout/>}/>
            </Route>
  )  
);