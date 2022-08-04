import React, { Component } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

//import Component
import Slider from '../component/slider/index';
import Navbar from '../component/navbar/index';
import ViewTopAds from '../component/viewTopAds/index';
import Footer from '../component/footer/index';
import 'bootstrap/dist/css/bootstrap.min.css';

//Designing Home Page
import {MDBContainer, MDBTypography} from 'mdb-react-ui-kit';
class Home extends Component {
  
  render() {
    return (
      <div>
        <div>
          <Navbar />
        </div>

        <div className='mt-2'>
          <Slider />
        </div>

        <div className='mt-2'>
          <MDBContainer>
          <figure className="m-3">
            <MDBTypography blockquote>
              <h1><span>All</span> Ads<span></span></h1>
            </MDBTypography>
          </figure>
        <ViewTopAds />
        </MDBContainer>

        </div>

        <div className='mt-4'>
          <Footer />
        </div>

      </div>
    );
  }
}

export default Home;