import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {

  render() {
    return (
       <div>
         <div>

           {/* download */}
           <section id="download" className="clearfix parallax-section">
             <div className="container">
               <div className="row">
                 <div className="col-sm-12 text-center">
                   <h2>Download on App Store</h2>
                 </div>
               </div>{/* row */}
               {/* row */}
               <div className="row">
                 {/* download-app */}
                 <div className="col-md-4">
                   <a href="#" className="download-app">
                     <img src="images/icon/16.png" alt="Image" className="img-fluid" />
                     <span className="pull-left">
              <span>available on</span>
              <strong>Google Play</strong>
            </span>
                   </a>
                 </div>{/* download-app */}
                 {/* download-app */}
                 <div className="col-md-4">
                   <a href="#" className="download-app">
                     <img src="images/icon/17.png" alt="Image" className="img-fluid" />
                     <span className="pull-left">
              <span>available on</span>
              <strong>App Store</strong>
            </span>
                   </a>
                 </div>{/* download-app */}
                 {/* download-app */}
                 <div className="col-md-4">
                   <a href="#" className="download-app">
                     <img src="images/icon/18.png" alt="Image" className="img-fluid" />
                     <span className="pull-left">
              <span>available on</span>
              <strong>Windows Store</strong>
            </span>
                   </a>
                 </div>{/* download-app */}
               </div>{/* row */}
             </div>{/* contaioner */}
           </section>
         </div>

       </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
