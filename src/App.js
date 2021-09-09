import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route>
            <Home exact path="/" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
