import * as React from 'react';
import SignInSide from './pages/SignInSide';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import GameSelection from './pages/GameSelection';


function App() {
  
  const [loggedIn, setLoggedIn] = React.useState(false);

  
  if(loggedIn) {
    return (
      <Routes>
        <Route path='/selection' element={<GameSelection/>} />
        <Route path='/joinGame' element={<GameSelection/>} />
        <Route path='/createGame' element={<GameSelection/>} />
        <Route path='/home' element={<GameSelection/>} />
        <Route path="/login" element={<Navigate to ="/selection" />}/>
        <Route path="*" element={<Navigate to ="/selection" />}/>
      </Routes>
    );
  }
  else {
    return (
      <Routes>
        <Route path='/login' element={<SignInSide setLoggedIn={setLoggedIn}/>} />
        <Route path="*" element={<Navigate to ="/login" />}/>
      </Routes>  
    );
  }
}

export default App;
