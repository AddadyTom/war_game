import * as React from 'react';
import SignInSide from './pages/SignInSide';
import {
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import GameSelection from './pages/GameSelection';
import SettingStepper from './SettingsStepper/SettingStepper'

function App() {
  
  const [loggedIn, setLoggedIn] = React.useState(false);

  if(loggedIn) {
    return (
      <Routes>
        <Route excact path='/selection/joinGame' element={<GameSelection/>} />
        <Route excact path='/selection/createGame' element={<SettingStepper/>} />
        <Route excact path='/home' element={<GameSelection/>} />
        <Route excact path='/selection' element={<GameSelection/>} />
        <Route excact path="/login" element={<Navigate to ="/selection" />}/>
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
