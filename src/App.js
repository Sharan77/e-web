import React from 'react';
import Navbar from './pages/navbar';
import {BrowserRouter as Router} from "react-router-dom"
import './index.css'
import Section from './components/section'
import {DataProvider} from './components/Context'


 class App extends React.Component {
  render(){
    return (
      <DataProvider>
      <div className="App">
      <Router>
      <Navbar />
      <Section />
     
      
      </Router>
      </div>
      </DataProvider>
     
      
    );
  }
 
}

export default App;
