import join_icon from './join_game.png';
import create_icon from './create_game.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         This is War Game 
        </p>
        <div className="Choices">
          <div className="Choice">
            <img src={create_icon} className="App-logo" alt="logo" />
            <p>
            New Game
            </p>
          </div>
          <div className="Choice">
            <img src={join_icon} className="App-logo" alt="logo" />
            <p>
            Join Game
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
