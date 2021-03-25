import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import {Home} from './views/home'

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home}></Route>
    </div>
  );
}

export default App;
