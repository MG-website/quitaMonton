import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import { Home } from './views/home'
import { Juego } from './views/juego'
import { Mesa } from './views/mesa'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={ Home }></Route>
      <Route exact path='/juego' component={ Juego }></Route>
      <Route exact path='/juego/mesa' component={ Mesa }></Route>

    </div>
  );
}

export default App;
