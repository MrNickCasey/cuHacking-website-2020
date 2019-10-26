import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  Navbar, 
  MLHBanner, 
  Landing, 
  Footer,
  Partners
} from 'components';

// Superfluous comment

class App extends Component { 
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className={`app`}>
        <Navbar /> 
        <div className="slide-wrapper">
          <Landing />
          <Partners /> 
        </div>
        <Footer /> 
        <MLHBanner />   
      </div>
    )
  }
};

ReactDOM.render(<App/>, document.getElementById('root'));
