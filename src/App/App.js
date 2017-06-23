import React, { Component } from 'react';
import './App.css';
import Categories from '../Categories/Categories';
import Coupons from '../Coupons/Coupons'
import Footer from '../Footer/Footer';
import Intro from '../Intro/Intro';
import Nav from '../Nav/Nav';
import Services from '../Services/Services'
import Team from '../Team/Team';
import Travel from '../Travel/Travel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Intro />
        <Coupons />
        <Categories />
        <Services />
        <Travel />
        <Team />
        <Footer />
      </div>
    );
  }
}

export default App;
