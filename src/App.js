import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Header from './components/Header';
import Home from './screens/home/Home';
import Login from './screens/login/Login';
import SignUp from './screens/signup/SignUp';
import { useAuthContext } from './hooks/useAuthContext';
import 'react-calendar/dist/Calendar.css';


function App() {

  const {authIsReady, user } = useAuthContext()

  return (
    <>
    {authIsReady && (
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path = '/' element = {
        <>
        {!user && <Navigate to = '/login'/>}
        {user && <Home/>}        
        </>
      }/>
      <Route path ='/login' element = {
        <>
        {user && <Navigate to = '/'/>}
        {!user && <Login/>}        
        </>
      } />
      <Route path ='/signup' element = {
        <>
        {user && <Navigate to = '/'/>}
        {!user && <SignUp/>}        
        </>
      }/>
  
  
      </Routes>
      </BrowserRouter>
    )}
    </>
    
  );
}

export default App;
