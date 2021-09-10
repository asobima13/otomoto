import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react'
import Home from './pages/home/Home'
import Jubelmoto from './pages/jubelmoto/Jubelmoto';
import Header from './components/header/Header';

const App = () => {
  const [isView, setIsView] = useState(true)
  const [path, setPath] = useState('')

  return (
    <div className="App">
      <Router>
        <Header isView={isView} path={path} />
        <Switch>
          <Route exact path="/" >
            <Home setIsView={setIsView} setPath={setPath} />
          </Route>
          <Route path="/jubelmoto">
            <Jubelmoto setPath={setPath} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
