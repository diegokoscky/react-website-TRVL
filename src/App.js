import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, 
Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Servicos from './components/pages/Servicos';
import Produtos from './components/pages/Produtos';
import SignUp from './components/pages/SignUp';
  

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/servicos" component={Servicos} />
          <Route path="/produtos" component={Produtos} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
