import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './common/header/Header';
import Searchbar from './common/searchbar/Searchbar';
import Footer from './common/footer/Footer';
import Home from './home/Home';
import Creams from './creams/Creams';
import NotFound from './NotFound';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Searchbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/creams' component={Creams} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
        </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
