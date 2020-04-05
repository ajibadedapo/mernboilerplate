import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Home from "../landing/home";


class Navbar extends Component {
  render() {
    return (
        <div>
            <header id="header" className="clearfix">
                {/* navbar */}
                <nav className="navbar navbar-default navbar-expand-lg">
                    <div className="container">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#tr-mainmenu" aria-controls="tr-mainmenu" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><i className="fa fa-align-justify" /></span>
                        </button>
                        <a className="navbar-brand" href="index-2.html"><img className="img-fluid" src="images/logo.png" alt="Logo" /></a>
                        <div className="collapse navbar-collapse" id="tr-mainmenu">
                            <ul className="nav navbar-nav">
                                <li className="active dropdown"><a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown">Home <span className="caret" /></a>
                                    <ul className="dropdown-menu">
                                        <li className="active"><a href="index-2.html">Home Default </a></li>
                                        <li><a href="index-one.html">Home Version-1</a></li>
                                        <li><a href="index-two.html">Home Version-2</a></li>
                                        <li><a href="index-three.html">Home Version-3</a></li>
                                        <li><a href="index-car.html">Home Car-1<span className="badge">New</span></a></li>
                                        <li><a href="index-car-two.html">Home Car-2<span className="badge">New</span></a></li>
                                        <li><a href="directory.html">Home Directory<span className="badge">Latest</span></a></li>
                                    </ul>
                                </li>
                                <li><a href="categories.html">Category</a></li>
                                <li><a href="details.html">Ad Details</a></li>
                                <li><a href="faq.html">Help/Support</a></li>
                                <li className="dropdown"><a href="javascript:void(0);" className="dropdown-toggle" data-toggle="dropdown">Pages <span className="caret" /></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="about-us.html">ABout Us</a></li>
                                        <li><a href="contact-us.html">Contact Us</a></li>
                                        <li><a href="ad-post.html">Ad post</a></li>
                                        <li><a href="ad-post-details.html">Ad post Details</a></li>
                                        <li><a href="categories-main.html">Category Ads</a></li>
                                        <li><a href="details.html">Ad Details</a></li>
                                        <li><a href="my-ads.html">My Ads</a></li>
                                        <li><a href="my-profile.html">My Profile</a></li>
                                        <li><a href="favourite-ads.html">Favourite Ads</a></li>
                                        <li><a href="archived-ads.html">Archived Ads</a></li>
                                        <li><a href="pending-ads.html">Pending Ads</a></li>
                                        <li><a href="delete-account.html">Close Account</a></li>
                                        <li><a href="published.html">Ad Publised</a></li>
                                        <li><a href="signup.html">Sign Up</a></li>
                                        <li><a href="signin.html">Sign In</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="coming-soon.html">Coming Soon <span className="badge">New</span></a></li>
                                        <li><a href="pricing.html">Pricing<span className="badge">New</span></a></li>
                                        <li><a href="500-page.html">500 Opsss<span className="badge">New</span></a></li>
                                        <li><a href="404-page.html">404 Error<span className="badge">New</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-right">
                            <div className="dropdown language-dropdown">
                                <i className="fa fa-globe" />
                                <a data-toggle="dropdown" href="#"><span className="change-text">United Kingdom</span> <i className="fa fa-angle-down" /></a>
                                <ul className="dropdown-menu language-change">
                                    <li><a href="#">United Kingdom</a></li>
                                    <li><a href="#">United States</a></li>
                                    <li><a href="#">China</a></li>
                                    <li><a href="#">Russia</a></li>
                                </ul>
                            </div>{/* language-dropdown */}
                            {/* sign-in */}
                            <ul className="sign-in">
                                <li><i className="fa fa-user" /></li>
                                <li><a href="signin.html"> Sign In </a></li>
                                <li><a href="signup.html">Register</a></li>
                            </ul>{/* sign-in */}
                            <a href="ad-post.html" className="btn">Post Your Ad</a>
                        </div>
                    </div>{/* container */}
                </nav>{/* navbar */}
            </header>{/* header */}

        </div>
    );
  }
}
export default Navbar;