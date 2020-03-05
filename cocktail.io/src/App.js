import React from 'react';
import Navbar from './components/navbar/navbar';
import Landing from './components/landing/landing';
import Card from './components/cocktailCard/mainCard';
import Footer from './components/footer/footer';

import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/random" component={Card} />
        </Switch>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
