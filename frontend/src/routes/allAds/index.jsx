import React, { Component } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

//import Component
import Navbar from '../../component/navbar/index';
import AllAds from '../../component/allAds/index';
import 'bootstrap/dist/css/bootstrap.min.css';

//Designing Home Page
class Home extends Component {
  
  render() {
    return (
      <div>
        <div >
          <Navbar />
        </div>
        <div className='mt-5 pt-5 '>
          <AllAds />
        </div>
      </div>
    );
  }
}

export default Home;