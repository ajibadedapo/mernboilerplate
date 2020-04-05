import React, { Component } from 'react';
import Fuse from "fuse.js";
//import '../../assets/css/minorstyles.css';

class Search extends Component {
    constructor(props)
    {
        super(props);
        this.items = [
            {'name': 'davido'},
            {'name': 'wizkid'},
            {'name': 'idris elba'},
        ];

        this.state = {
            suggestions: [],
        }
    }
    _suggestionSelect(result, lat, lng, text) {
        console.log(result, lat, lng, text)
    }
    onTextChanged = (e) => {
        const value = e.target.value;
        let suggestions = {};
        if (value.length > 0)
        {
            let options = {
                shouldSort: true,
                threshold: 0.6,
                location: 0,
                distance: 100,
                minMatchCharLength: 1,
                keys: [
                    "name",
                ]
            };
            let fuse = new Fuse(this.items, options); // "list" is the item array
            let suggestions = fuse.search(value);
           // console.log(suggestions);
            this.setState(() => ({suggestions}));

        }
        //this.setState(() => ({suggestions}));
    };

    renderSuggestions () {
        const {suggestions} = this.state;
      //   Object.keys(suggestions).map((suggestion) =>
      //       console.log((suggestion))
      //   );
         //const parsedsuggestions = JSON.parse(suggestions);

        console.log(suggestions[0]);

        const suggestedwords = [];
        for(var key in suggestions) {

            suggestedwords.push(<option value={suggestions[key].item.name}>{suggestions[key].item.name}</option>)
        }

    /*    if (isEmpty(suggestions))
        {
            console.log('Suggestion state empty');
            return null;
        }*/

        return (
                <datalist id='suggestions'>
                    {suggestedwords}
                </datalist>
        )
    }

    render() {
        return (
            <div className="">
                <section id="main" className="clearfix home-default">
                    <div className="container">
                        {/* banner */}
                        <div className="banner-section text-center">
                            <h1 className="title">World's Largest Healthcare Service Directory </h1>
                            <h3>Search from over 15,00,000 Healthcare Services &amp; Get unlimited value for free!</h3>
                            {/* banner-form */}
                            <div className="banner-form">
                                <form action="#">
                                    {/* category-change */}
                                    <div className="dropdown category-dropdown">
                                        <select className="form-control" style={{'width': '100%'}}>
                                            <option>Hospital</option>
                                            <option>Clinic</option>
                                            <option>Specialist</option>
                                        </select>
                                    </div>{/* category-change */}
                                    <input type="text" autoComplete="new-password" list="suggestions" onChange={this.onTextChanged} id="autocomplete-input" className="form-control autocomplete" placeholder="Search hospital name"  />
                                    {this.renderSuggestions()}
                                    <button type="submit" className="form-control" value="Search">Search</button>
                                </form>
                            </div>{/* banner-form */}
                            {/* banner-socail */}
                            <ul className="banner-socail list-inline">
                                <li><a href="#" title="Facebook"><i className="fa fa-facebook" /></a></li>
                                <li><a href="#" title="Twitter"><i className="fa fa-twitter" /></a></li>
                                <li><a href="#" title="Google Plus"><i className="fa fa-google-plus" /></a></li>
                                <li><a href="#" title="Youtube"><i className="fa fa-youtube" /></a></li>
                            </ul>{/* banner-socail */}
                        </div>{/* banner */}
                        {/* main-content */}
                        <div className="main-content">
                            {/* row */}
                            <div className="row">
                                <div className="d-none d-md-block col-md-2 text-center">
                                   {/*/!* <div className="advertisement">*/}
                                   {/*     <a href="#"><img src="images/ads/2.jpg" alt="Images" className="img-fluid" /></a>*/}
                                   {/* </div>*!/*/}
                                </div>
                                {/* product-list */}
                                <div className="col-md-8">
                                    {/* categorys */}
                                    <div className="section category-ad text-center">
                                        <ul className="category-list">
                                            <li className="category-item">
                                                <a href="categories.html">
                                                    <div className="category-icon"><img src="images/icon/1.png" alt="images" className="img-fluid" /></div>
                                                    <span className="category-title">Cars &amp; Vehicles</span>
                                                    <span className="category-quantity">(1298)</span>
                                                </a>
                                            </li>{/* category-item */}
                                            <li className="category-item">
                                                <a href="categories.html">
                                                    <div className="category-icon"><img src="images/icon/2.png" alt="images" className="img-fluid" /></div>
                                                    <span className="category-title">Electrics &amp; Gedgets</span>
                                                    <span className="category-quantity">(76212)</span>
                                                </a>
                                            </li>{/* category-item */}
                                            <li className="category-item">
                                                <a href="categories.html">
                                                    <div className="category-icon"><img src="images/icon/3.png" alt="images" className="img-fluid" /></div>
                                                    <span className="category-title">Real Estate</span>
                                                    <span className="category-quantity">(212)</span>
                                                </a>
                                            </li>{/* category-item */}
                                            <li className="category-item">
                                                <a href="categories.html">
                                                    <div className="category-icon"><img src="images/icon/4.png" alt="images" className="img-fluid" /></div>
                                                    <span className="category-title">Sports &amp; Games</span>
                                                    <span className="category-quantity">(972)</span>
                                                </a>
                                            </li>{/* category-item */}
                                            <li className="category-item">
                                                <a href="categories.html">
                                                    <div className="category-icon"><img src="images/icon/5.png" alt="images" className="img-fluid" /></div>
                                                    <span className="category-title">Fshion &amp; Beauty</span>
                                                    <span className="category-quantity">(1298)</span>
                                                </a>
                                            </li>{/* category-item */}
                                            <li className="category-item">
                                                <a href="categories.html">
                                                    <div className="category-icon"><img src="images/icon/6.png" alt="images" className="img-fluid" /></div>
                                                    <span className="category-title">Pets &amp; Animals</span>
                                                    <span className="category-quantity">(76212)</span>
                                                </a>
                                            </li>{/* category-item */}
                                            <li className="category-item">
                                                <a href="categories.html">
                                                    <div className="category-icon"><img src="images/icon/9.png" alt="images" className="img-fluid" /></div>
                                                    <span className="category-title">Home Appliances</span>
                                                    <span className="category-quantity">(1298)</span>
                                                </a>
                                            </li>{/* category-item */}
                                            <li className="category-item">
                                                <a href="categories.html">
                                                    <div className="category-icon"><img src="images/icon/10.png" alt="images" className="img-fluid" /></div>
                                                    <span className="category-title">Matrimony Services</span>
                                                    <span className="category-quantity">(76212)</span>
                                                </a>
                                            </li>{/* category-item */}
                                            <li className="category-item">
                                                <a href="categories.html">
                                                    <div className="category-icon"><img src="images/icon/11.png" alt="images" className="img-fluid" /></div>
                                                    <span className="category-title">Music &amp; Arts</span>
                                                    <span className="category-quantity">(212)</span>
                                                </a>
                                            </li>{/* category-item */}
                                            <li className="category-item">
                                                <a href="categories.html">
                                                    <div className="category-icon"><img src="images/icon/12.png" alt="images" className="img-fluid" /></div>
                                                    <span className="category-title">Miscellaneous </span>
                                                    <span className="category-quantity">(1298)</span>
                                                </a>
                                            </li>{/* category-item */}
                                            <li className="category-item">
                                                <a href="categories.html">
                                                    <div className="category-icon"><img src="images/icon/7.png" alt="images" className="img-fluid" /></div>
                                                    <span className="category-title">Job Openings </span>
                                                    <span className="category-quantity">(124)</span>
                                                </a>
                                            </li>{/* category-item */}
                                            <li className="category-item">
                                                <a href="categories.html">
                                                    <div className="category-icon"><img src="images/icon/8.png" alt="images" className="img-fluid" /></div>
                                                    <span className="category-title">Books &amp; Magazines</span>
                                                    <span className="category-quantity">(972)</span>
                                                </a>
                                            </li>{/* category-item */}
                                        </ul>
                                    </div>{/* category-ad */}
                                    {/* featureds */}
                                    <div className="section featureds">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="section-title featured-top">
                                                    <h4>Featured Ads</h4>
                                                </div>
                                            </div>
                                        </div>
                                        {/* featured-slider */}
                                        <div className="featured-slider">
                                            <div id="featured-slider">
                                                {/* featured */}
                                                <div className="featured">
                                                    <div className="featured-image">
                                                        <a href="details.html"><img src="images/featured/1.jpg" alt="" className="img-fluid" /></a>
                                                        <a href="#" className="verified" data-toggle="tooltip" data-placement="left" title="Verified"><i className="fa fa-check-square-o" /></a>
                                                    </div>
                                                    {/* ad-info */}
                                                    <div className="ad-info">
                                                        <h3 className="item-price">$800.00</h3>
                                                        <h4 className="item-title"><a href="#">Apple MacBook Pro with Retina Display</a></h4>
                                                        <div className="item-cat">
                                                            <span><a href="#">Electronics &amp; Gedgets</a></span>
                                                        </div>
                                                    </div>{/* ad-info */}
                                                    {/* ad-meta */}
                                                    <div className="ad-meta">
                                                        <div className="meta-content">
                                                            <span className="dated"><a href="#">7 Jan 10:10 pm </a></span>
                                                        </div>
                                                        {/* item-info-right */}
                                                        <div className="user-option pull-right">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Los Angeles, USA"><i className="fa fa-map-marker" /> </a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Dealer"><i className="fa fa-suitcase" /> </a>
                                                        </div>{/* item-info-right */}
                                                    </div>{/* ad-meta */}
                                                </div>{/* featured */}
                                                <div className="featured">
                                                    <div className="featured-image">
                                                        <a href="details.html"><img src="images/featured/2.jpg" alt="" className="img-fluid" /></a>
                                                    </div>
                                                    {/* ad-info */}
                                                    <div className="ad-info">
                                                        <h3 className="item-price">$25000.00</h3>
                                                        <h4 className="item-title"><a href="#">2018 Bugatti Veyron Sport Middlecar</a></h4>
                                                        <div className="item-cat">
                                                            <span><a href="#">Cars &amp; Vehicles</a></span>
                                                        </div>
                                                    </div>{/* ad-info */}
                                                    {/* ad-meta */}
                                                    <div className="ad-meta">
                                                        <div className="meta-content">
                                                            <span className="dated"><a href="#">7 Jan 10:10 pm </a></span>
                                                        </div>
                                                        {/* item-info-right */}
                                                        <div className="user-option pull-right">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Los Angeles, USA"><i className="fa fa-map-marker" /> </a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Individual"><i className="fa fa-user" /> </a>
                                                        </div>{/* item-info-right */}
                                                    </div>{/* ad-meta */}
                                                </div>{/* featured */}
                                                <div className="featured">
                                                    <div className="featured-image">
                                                        <a href="details.html"><img src="images/featured/3.jpg" alt="" className="img-fluid" /></a>
                                                        <a href="#" className="verified" data-toggle="tooltip" data-placement="left" title="Verified"><i className="fa fa-check-square-o" /></a>
                                                    </div>
                                                    {/* ad-info */}
                                                    {/* ad-info */}
                                                    <div className="ad-info">
                                                        <h3 className="item-price">$250.00 <span className="negotiable">(Negotiable)</span></h3>
                                                        <h4 className="item-title"><a href="#">Vivster Acoustic Guitar</a></h4>
                                                        <div className="item-cat">
                                                            <span><a href="#">Music &amp; Art</a></span>
                                                        </div>
                                                    </div>{/* ad-info */}
                                                    {/* ad-meta */}
                                                    <div className="ad-meta">
                                                        <div className="meta-content">
                                                            <span className="dated"><a href="#">7 Jan 10:10 pm </a></span>
                                                        </div>
                                                        {/* item-info-right */}
                                                        <div className="user-option pull-right">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Los Angeles, USA"><i className="fa fa-map-marker" /> </a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Dealer"><i className="fa fa-suitcase" /> </a>
                                                        </div>{/* item-info-right */}
                                                    </div>{/* ad-meta */}
                                                </div>{/* featured */}
                                                <div className="featured">
                                                    <div className="featured-image">
                                                        <a href="details.html"><img src="images/trending/4.jpg" alt="" className="img-fluid" /></a>
                                                    </div>
                                                    {/* ad-info */}
                                                    <div className="ad-info">
                                                        <h3 className="item-price">$50.00</h3>
                                                        <h4 className="item-title"><a href="#">Rick Morton- Magicius Chase</a></h4>
                                                        <div className="item-cat">
                                                            <span><a href="#">Books &amp; Magazines</a></span>
                                                        </div>
                                                    </div>{/* ad-info */}
                                                    {/* ad-meta */}
                                                    <div className="ad-meta">
                                                        <div className="meta-content">
                                                            <span className="dated"><a href="#">7 Jan 10:10 pm </a></span>
                                                        </div>
                                                        {/* item-info-right */}
                                                        <div className="user-option pull-right">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Los Angeles, USA"><i className="fa fa-map-marker" /> </a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Individual"><i className="fa fa-user" /> </a>
                                                        </div>{/* item-info-right */}
                                                    </div>{/* ad-meta */}
                                                </div>{/* featured */}
                                                <div className="featured">
                                                    <div className="featured-image">
                                                        <a href="details.html"><img src="images/trending/3.jpg" alt="" className="img-fluid" /></a>
                                                    </div>
                                                    {/* ad-info */}
                                                    <div className="ad-info">
                                                        <h3 className="item-price">$380.00</h3>
                                                        <h4 className="item-title"><a href="#">Samsung Galaxy S6 Edge</a></h4>
                                                        <div className="item-cat">
                                                            <span><a href="#">Electronics &amp; Gedgets</a></span>
                                                        </div>
                                                    </div>{/* ad-info */}
                                                    {/* ad-meta */}
                                                    <div className="ad-meta">
                                                        <div className="meta-content">
                                                            <span className="dated"><a href="#">7 Jan 10:10 pm </a></span>
                                                        </div>
                                                        {/* item-info-right */}
                                                        <div className="user-option pull-right">
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Los Angeles, USA"><i className="fa fa-map-marker" /> </a>
                                                            <a href="#" data-toggle="tooltip" data-placement="top" title="Individual"><i className="fa fa-user" /> </a>
                                                        </div>{/* item-info-right */}
                                                    </div>{/* ad-meta */}
                                                </div>{/* featured */}
                                            </div>{/* featured-slider */}
                                        </div>{/* #featured-slider */}
                                    </div>{/* featureds */}
                                    {/* ad-section */}
                                    <div className="ad-section text-center">
                                        <a href="#"><img src="images/ads/3.jpg" alt="Image" className="img-fluid" /></a>
                                    </div>{/* ad-section */}
                                    {/* trending-ads */}
                                    <div className="section trending-ads">
                                        <div className="section-title tab-manu">
                                            <h4>Trending Ads</h4>
                                            {/* Nav tabs */}
                                            <ul className="nav nav-tabs" role="tablist">
                                                <li role="presentation"><a className="active" href="#recent-ads" data-toggle="tab">Recent Ads</a></li>
                                                <li role="presentation"><a href="#popular" data-toggle="tab">Popular Ads</a></li>
                                                <li role="presentation"><a href="#hot-ads" data-toggle="tab">Hot Ads</a></li>
                                            </ul>
                                        </div>
                                        {/* Tab panes */}
                                        <div className="tab-content">
                                            {/* tab-pane */}
                                            <div role="tabpanel" className="tab-pane fade in active show" id="recent-ads">
                                                {/* ad-item */}
                                                <div className="ad-item row">
                                                    {/* item-image */}
                                                    <div className="item-image-box col-lg-4">
                                                        <div className="item-image">
                                                            <a href="details.html"><img src="images/trending/1.jpg" alt="Image" className="img-fluid" /></a>
                                                            <a href="#" className="verified" data-toggle="tooltip" data-placement="left" title="Verified"><i className="fa fa-check-square-o" /></a>
                                                        </div>{/* item-image */}
                                                    </div>
                                                    {/* rending-text */}
                                                    <div className="item-info col-lg-8">
                                                        {/* ad-info */}
                                                        <div className="ad-info">
                                                            <h3 className="item-price">$50.00</h3>
                                                            <h4 className="item-title"><a href="#">Apple TV - Everything you need to know!</a></h4>
                                                            <div className="item-cat">
                                                                <span><a href="#">Electronics &amp; Gedgets</a></span> /
                                                                <span><a href="#">Tv &amp; Video</a></span>
                                                            </div>
                                                        </div>{/* ad-info */}
                                                        {/* ad-meta */}
                                                        <div className="ad-meta">
                                                            <div className="meta-content">
                                                                <span className="dated"><a href="#">7 Jan, 16  10:10 pm </a></span>
                                                                <a href="#" className="tag"><i className="fa fa-tags" /> Used</a>
                                                            </div>
                                                            {/* item-info-right */}
                                                            <div className="user-option pull-right">
                                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Los Angeles, USA"><i className="fa fa-map-marker" /> </a>
                                                                <a className="online" href="#" data-toggle="tooltip" data-placement="top" title="Dealer"><i className="fa fa-suitcase" /> </a>
                                                            </div>{/* item-info-right */}
                                                        </div>{/* ad-meta */}
                                                    </div>{/* item-info */}
                                                </div>{/* ad-item */}
                                                {/* ad-item */}
                                                <div className="ad-item row">
                                                    <div className="item-image-box col-lg-4">
                                                        {/* item-image */}
                                                        {/*/!*<div className="item-image">*/}
                                                        {/*    <a href="details.html"><img src="images/trending/2.jpg" alt="Image" className="img-fluid" /></a>*/}
                                                        {/*</div>*!//!* item-image *!/*/}
                                                    </div>{/* item-image-box */}
                                                    {/* rending-text */}
                                                    <div className="item-info col-lg-8">
                                                        {/* ad-info */}
                                                        <div className="ad-info">
                                                            <h3 className="item-price">$250.00 <span>(Negotiable)</span></h3>
                                                            <h4 className="item-title"><a href="#">Bark Furniture, Handmade Bespoke Furniture</a></h4>
                                                            <div className="item-cat">
                                                                <span><a href="#">Home Appliances</a></span> /
                                                                <span><a href="#">Sofa</a></span>
                                                            </div>
                                                        </div>{/* ad-info */}
                                                        {/* ad-meta */}
                                                        <div className="ad-meta">
                                                            <div className="meta-content">
                                                                <span className="dated"><a href="#">7 Jan, 16  10:10 pm </a></span>
                                                                <a href="#" className="tag"><i className="fa fa-tags" /> Used</a>
                                                            </div>
                                                            {/* item-info-right */}
                                                            <div className="user-option pull-right">
                                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Los Angeles, USA"><i className="fa fa-map-marker" /> </a>
                                                                <a className="online" href="#" data-toggle="tooltip" data-placement="top" title="Dealer"><i className="fa fa-suitcase" /> </a>
                                                            </div>{/* item-info-right */}
                                                        </div>{/* ad-meta */}
                                                    </div>{/* item-info */}
                                                </div>{/* ad-item */}
                                                {/* ad-item */}
                                                <div className="ad-item row">
                                                    <div className="item-image-box col-lg-4">
                                                        {/* item-image */}
                                                        <div className="item-image">
                                                            <a href="details.html"><img src="images/trending/4.jpg" alt="Image" className="img-fluid" /></a>
                                                            <a href="#" className="verified" data-toggle="tooltip" data-placement="left" title="Verified"><i className="fa fa-check-square-o" /></a>
                                                        </div>{/* item-image */}
                                                    </div>{/* item-image-box */}
                                                    {/* rending-text */}
                                                    <div className="item-info col-lg-8">
                                                        {/* ad-info */}
                                                        <div className="ad-info">
                                                            <h3 className="item-price">$800.00</h3>
                                                            <h4 className="item-title"><a href="#">Rick Morton- Magicius Chase</a></h4>
                                                            <div className="item-cat">
                                                                <span><a href="#">Books &amp; Magazines</a></span> /
                                                                <span><a href="#">Story book</a></span>
                                                            </div>
                                                        </div>{/* ad-info */}
                                                        {/* ad-meta */}
                                                        <div className="ad-meta">
                                                            <div className="meta-content">
                                                                <span className="dated"><a href="#">7 Jan, 16  10:10 pm </a></span>
                                                                <a href="#" className="tag"><i className="fa fa-tags" /> Used</a>
                                                            </div>
                                                            {/* item-info-right */}
                                                            <div className="user-option pull-right">
                                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Los Angeles, USA"><i className="fa fa-map-marker" /> </a>
                                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Individual"><i className="fa fa-user" /> </a>
                                                            </div>{/* item-info-right */}
                                                        </div>{/* ad-meta */}
                                                    </div>{/* item-info */}
                                                </div>{/* ad-item */}
                                                {/* ad-item */}
                                                <div className="ad-item row">
                                                    <div className="item-image-box col-lg-4">
                                                        {/* item-image */}
                                                        <div className="item-image">
                                                            <a href="details.html"><img src="images/trending/3.jpg" alt="Image" className="img-fluid" /></a>
                                                        </div>{/* item-image */}
                                                    </div>{/* item-image-box */}
                                                    {/* rending-text */}
                                                    <div className="item-info col-lg-8">
                                                        {/* ad-info */}
                                                        <div className="ad-info">
                                                            <h3 className="item-price">$890.00 <span>(Negotiable)</span></h3>
                                                            <h4 className="item-title"><a href="#">Samsung Galaxy S6 Edge</a></h4>
                                                            <div className="item-cat">
                                                                <span><a href="#">Electronics &amp; Gedgets</a></span> /
                                                                <span><a href="#">Mobile Phone</a></span>
                                                            </div>
                                                        </div>{/* ad-info */}
                                                        {/* ad-meta */}
                                                        <div className="ad-meta">
                                                            <div className="meta-content">
                                                                <span className="dated"><a href="#">7 Jan, 16  10:10 pm </a></span>
                                                                <a href="#" className="tag"><i className="fa fa-tags" /> Used</a>
                                                            </div>
                                                            {/* item-info-right */}
                                                            <div className="user-option pull-right">
                                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Los Angeles, USA"><i className="fa fa-map-marker" /> </a>
                                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Dealer"><i className="fa fa-suitcase" /> </a>
                                                            </div>{/* item-info-right */}
                                                        </div>{/* ad-meta */}
                                                    </div>{/* item-info */}
                                                </div>{/* ad-item */}
                                            </div>{/* tab-pane */}
                                            {/* tab-pane */}
                                            <div role="tabpanel" className="tab-pane fade" id="popular">
                                                <div className="ad-item row">
                                                    {/* item-image */}
                                                    <div className="item-image-box col-lg-4">
                                                        <div className="item-image">
                                                            <a href="details.html"><img src="images/trending/1.jpg" alt="Image" className="img-fluid" /></a>
                                                            <a href="#" className="verified" data-toggle="tooltip" data-placement="left" title="Verified"><i className="fa fa-check-square-o" /></a>
                                                        </div>{/* item-image */}
                                                    </div>
                                                    {/* rending-text */}
                                                    <div className="item-info col-lg-8">
                                                        {/* ad-info */}
                                                        <div className="ad-info">
                                                            <h3 className="item-price">$50.00</h3>
                                                            <h4 className="item-title"><a href="#">Apple TV - Everything you need to know!</a></h4>
                                                            <div className="item-cat">
                                                                <span><a href="#">Electronics &amp; Gedgets</a></span> /
                                                                <span><a href="#">Tv &amp; Video</a></span>
                                                            </div>
                                                        </div>{/* ad-info */}
                                                        {/* ad-meta */}
                                                        <div className="ad-meta">
                                                            <div className="meta-content">
                                                                <span className="dated"><a href="#">7 Jan, 16  10:10 pm </a></span>
                                                                <a href="#" className="tag"><i className="fa fa-tags" /> Used</a>
                                                            </div>
                                                            {/* item-info-right */}
                                                            <div className="user-option pull-right">
                                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Los Angeles, USA"><i className="fa fa-map-marker" /> </a>
                                                                <a className="online" href="#" data-toggle="tooltip" data-placement="top" title="Dealer"><i className="fa fa-suitcase" /> </a>
                                                            </div>{/* item-info-right */}
                                                        </div>{/* ad-meta */}
                                                    </div>{/* item-info */}
                                                </div>{/* ad-item */}
                                                <div className="ad-item row">
                                                    <div className="item-image-box col-lg-4">
                                                        {/* item-image */}
                                                        <div className="item-image">
                                                            <a href="details.html"><img src="images/trending/3.jpg" alt="Image" className="img-fluid" /></a>
                                                        </div>{/* item-image */}
                                                    </div>{/* item-image-box */}
                                                    <div className="item-info col-lg-8">
                                                        {/* ad-info */}
                                                        <div className="ad-info">
                                                            <h3 className="item-price">$890.00 <span>(Negotiable)</span></h3>
                                                            <h4 className="item-title"><a href="#">Samsung Galaxy S6 Edge</a></h4>
                                                            <div className="item-cat">
                                                                <span><a href="#">Electronics &amp; Gedgets</a></span> /
                                                                <span><a href="#">Mobile Phone</a></span>
                                                            </div>
                                                        </div>{/* ad-info */}
                                                        {/* ad-meta */}
                                                        <div className="ad-meta">
                                                            <div className="meta-content">
                                                                <span className="dated"><a href="#">7 Jan, 16  10:10 pm </a></span>
                                                                <a href="#" className="tag"><i className="fa fa-tags" /> Used</a>
                                                            </div>
                                                            {/* item-info-right */}
                                                            <div className="user-option pull-right">
                                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Los Angeles, USA"><i className="fa fa-map-marker" /> </a>
                                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Dealer"><i className="fa fa-suitcase" /> </a>
                                                            </div>{/* item-info-right */}
                                                        </div>{/* ad-meta */}
                                                    </div>{/* item-info */}
                                                </div>{/* ad-item */}
                                                {/* ad-item */}
                                                <div className="ad-item row">
                                                    <div className="item-image-box col-lg-4">
                                                        {/* item-image */}
                                                        <div className="item-image">
                                                            <a href="details.html"><img src="images/trending/2.jpg" alt="Image" className="img-fluid" /></a>
                                                        </div>{/* item-image */}
                                                    </div>{/* item-image-box */}
                                                    {/* rending-text */}
                                                    <div className="item-info col-lg-8">
                                                        {/* ad-info */}
                                                        <div className="ad-info">
                                                            <h3 className="item-price">$250.00 <span>(Negotiable)</span></h3>
                                                            <h4 className="item-title"><a href="#">Bark Furniture, Handmade Bespoke Furniture</a></h4>
                                                            <div className="item-cat">
                                                                <span><a href="#">Home Appliances</a></span> /
                                                                <span><a href="#">Sofa</a></span>
                                                            </div>
                                                        </div>{/* ad-info */}
                                                        {/* ad-meta */}
                                                        <div className="ad-meta">
                                                            <div className="meta-content">
                                                                <span className="dated"><a href="#">7 Jan, 16  10:10 pm </a></span>
                                                                <a href="#" className="tag"><i className="fa fa-tags" /> Used</a>
                                                            </div>
                                                            {/* item-info-right */}
                                                            <div className="user-option pull-right">
                                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Los Angeles, USA"><i className="fa fa-map-marker" /> </a>
                                                                <a className="online" href="#" data-toggle="tooltip" data-placement="top" title="Dealer"><i className="fa fa-suitcase" /> </a>
                                                            </div>{/* item-info-right */}
                                                        </div>{/* ad-meta */}
                                                    </div>{/* item-info */}
                                                </div>{/* ad-item */}
                                                {/* ad-item */}
                                                <div className="ad-item row">
                                                    <div className="item-image-box col-lg-4">
                                                        {/* item-image */}
                                                        <div className="item-image">
                                                            <a href="details.html"><img src="images/trending/4.jpg" alt="Image" className="img-fluid" /></a>
                                                            <a href="#" className="verified" data-toggle="tooltip" data-placement="left" title="Verified"><i className="fa fa-check-square-o" /></a>
                                                        </div>{/* item-image */}
                                                    </div>{/* item-image-box */}
                                                    {/* rending-text */}
                                                    <div className="item-info col-lg-8">
                                                        {/* ad-info */}
                                                        <div className="ad-info">
                                                            <h3 className="item-price">$800.00</h3>
                                                            <h4 className="item-title"><a href="#">Rick Morton- Magicius Chase</a></h4>
                                                            <div className="item-cat">
                                                                <span><a href="#">Books &amp; Magazines</a></span> /
                                                                <span><a href="#">Story book</a></span>
                                                            </div>
                                                        </div>{/* ad-info */}
                                                        {/* ad-meta */}
                                                        <div className="ad-meta">
                                                            <div className="meta-content">
                                                                <span className="dated"><a href="#">7 Jan, 16  10:10 pm </a></span>
                                                                <a href="#" className="tag"><i className="fa fa-tags" /> Used</a>
                                                            </div>
                                                            {/* item-info-right */}
                                                            <div className="user-option pull-right">
                                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Los Angeles, USA"><i className="fa fa-map-marker" /> </a>
                                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Individual"><i className="fa fa-user" /> </a>
                                                            </div>{/* item-info-right */}
                                                        </div>{/* ad-meta */}
                                                    </div>{/* item-info */}
                                                </div>{/* ad-item */}
                                            </div>{/* tab-pane */}
                                            {/* tab-pane */}
                                            <div role="tabpanel" className="tab-pane fade" id="hot-ads">
                                                {/* ad-item */}
                                                <div className="ad-item row">
                                                    {/* item-image */}
                                                    <div className="item-image-box col-lg-4">
                                                        <div className="item-image">
                                                            <a href="details.html"><img src="images/trending/1.jpg" alt="Image" className="img-fluid" /></a>
                                                            <a href="#" className="verified" data-toggle="tooltip" data-placement="left" title="Verified"><i className="fa fa-check-square-o" /></a>
                                                        </div>{/* item-image */}
                                                    </div>
                                                    {/* rending-text */}
                                                    <div className="item-info col-lg-8">
                                                        {/* ad-info */}
                                                        <div className="ad-info">
                                                            <h3 className="item-price">$50.00</h3>
                                                            <h4 className="item-title"><a href="#">Apple TV - Everything you need to know!</a></h4>
                                                            <div className="item-cat">
                                                                <span><a href="#">Electronics &amp; Gedgets</a></span> /
                                                                <span><a href="#">Tv &amp; Video</a></span>
                                                            </div>
                                                        </div>{/* ad-info */}
                                                        {/* ad-meta */}
                                                        <div className="ad-meta">
                                                            <div className="meta-content">
                                                                <span className="dated"><a href="#">7 Jan, 16  10:10 pm </a></span>
                                                                <a href="#" className="tag"><i className="fa fa-tags" /> Used</a>
                                                            </div>
                                                            {/* item-info-right */}
                                                            <div className="user-option pull-right">
                                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Los Angeles, USA"><i className="fa fa-map-marker" /> </a>
                                                                <a className="online" href="#" data-toggle="tooltip" data-placement="top" title="Dealer"><i className="fa fa-suitcase" /> </a>
                                                            </div>{/* item-info-right */}
                                                        </div>{/* ad-meta */}
                                                    </div>{/* item-info */}
                                                </div>{/* ad-item */}
                                                {/* ad-item */}
                                                <div className="ad-item row">
                                                    <div className="item-image-box col-lg-4">
                                                        {/* item-image */}
                                                        <div className="item-image">
                                                            <a href="details.html"><img src="images/trending/4.jpg" alt="Image" className="img-fluid" /></a>
                                                            <a href="#" className="verified" data-toggle="tooltip" data-placement="left" title="Verified"><i className="fa fa-check-square-o" /></a>
                                                        </div>{/* item-image */}
                                                    </div>{/* item-image-box */}
                                                    {/* rending-text */}
                                                    <div className="item-info col-lg-8">
                                                        {/* ad-info */}
                                                        <div className="ad-info">
                                                            <h3 className="item-price">$800.00</h3>
                                                            <h4 className="item-title"><a href="#">Rick Morton- Magicius Chase</a></h4>
                                                            <div className="item-cat">
                                                                <span><a href="#">Books &amp; Magazines</a></span> /
                                                                <span><a href="#">Story book</a></span>
                                                            </div>
                                                        </div>{/* ad-info */}
                                                        {/* ad-meta */}
                                                        <div className="ad-meta">
                                                            <div className="meta-content">
                                                                <span className="dated"><a href="#">7 Jan, 16  10:10 pm </a></span>
                                                                <a href="#" className="tag"><i className="fa fa-tags" /> Used</a>
                                                            </div>
                                                            {/* item-info-right */}
                                                            <div className="user-option pull-right">
                                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Los Angeles, USA"><i className="fa fa-map-marker" /> </a>
                                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Individual"><i className="fa fa-user" /> </a>
                                                            </div>{/* item-info-right */}
                                                        </div>{/* ad-meta */}
                                                    </div>{/* item-info */}
                                                </div>{/* ad-item */}
                                                <div className="ad-item row">
                                                    <div className="item-image-box col-lg-4">
                                                        {/* item-image */}
                                                        <div className="item-image">
                                                            <a href="details.html"><img src="images/trending/3.jpg" alt="Image" className="img-fluid" /></a>
                                                        </div>{/* item-image */}
                                                    </div>{/* item-image-box */}
                                                    {/* ad-item */}
                                                    <div className="item-info col-lg-8">
                                                        {/* ad-info */}
                                                        <div className="ad-info">
                                                            <h3 className="item-price">$890.00 <span>(Negotiable)</span></h3>
                                                            <h4 className="item-title"><a href="#">Samsung Galaxy S6 Edge</a></h4>
                                                            <div className="item-cat">
                                                                <span><a href="#">Electronics &amp; Gedgets</a></span> /
                                                                <span><a href="#">Mobile Phone</a></span>
                                                            </div>
                                                        </div>{/* ad-info */}
                                                        {/* ad-meta */}
                                                        <div className="ad-meta">
                                                            <div className="meta-content">
                                                                <span className="dated"><a href="#">7 Jan, 16  10:10 pm </a></span>
                                                                <a href="#" className="tag"><i className="fa fa-tags" /> Used</a>
                                                            </div>
                                                            {/* item-info-right */}
                                                            <div className="user-option pull-right">
                                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Los Angeles, USA"><i className="fa fa-map-marker" /> </a>
                                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Dealer"><i className="fa fa-suitcase" /> </a>
                                                            </div>{/* item-info-right */}
                                                        </div>{/* ad-meta */}
                                                    </div>{/* item-info */}
                                                </div>{/* ad-item */}
                                                {/* ad-item */}
                                                <div className="ad-item row">
                                                    <div className="item-image-box col-lg-4">
                                                        {/* item-image */}
                                                        <div className="item-image">
                                                            <a href="details.html"><img src="images/trending/2.jpg" alt="Image" className="img-fluid" /></a>
                                                        </div>{/* item-image */}
                                                    </div>{/* item-image-box */}
                                                    {/* rending-text */}
                                                    <div className="item-info col-lg-8">
                                                        {/* ad-info */}
                                                        <div className="ad-info">
                                                            <h3 className="item-price">$250.00 <span>(Negotiable)</span></h3>
                                                            <h4 className="item-title"><a href="#">Bark Furniture, Handmade Bespoke Furniture</a></h4>
                                                            <div className="item-cat">
                                                                <span><a href="#">Home Appliances</a></span> /
                                                                <span><a href="#">Sofa</a></span>
                                                            </div>
                                                        </div>{/* ad-info */}
                                                        {/* ad-meta */}
                                                        <div className="ad-meta">
                                                            <div className="meta-content">
                                                                <span className="dated"><a href="#">7 Jan, 16  10:10 pm </a></span>
                                                                <a href="#" className="tag"><i className="fa fa-tags" /> Used</a>
                                                            </div>
                                                            {/* item-info-right */}
                                                            <div className="user-option pull-right">
                                                                <a href="#" data-toggle="tooltip" data-placement="top" title="Los Angeles, USA"><i className="fa fa-map-marker" /> </a>
                                                                <a className="online" href="#" data-toggle="tooltip" data-placement="top" title="Dealer"><i className="fa fa-suitcase" /> </a>
                                                            </div>{/* item-info-right */}
                                                        </div>{/* ad-meta */}
                                                    </div>{/* item-info */}
                                                </div>{/* ad-item */}
                                            </div>{/* tab-pane */}
                                        </div>
                                    </div>{/* trending-ads */}
                                    {/* cta */}
                                    <div className="section cta text-center">
                                        <div className="row">
                                            {/* single-cta */}
                                            <div className="col-lg-4">
                                                <div className="single-cta">
                                                    {/* cta-icon */}
                                                    <div className="cta-icon icon-secure">
                                                        <img src="images/icon/13.png" alt="Icon" className="img-fluid" />
                                                    </div>{/* cta-icon */}
                                                    <h4>Secure Trading</h4>
                                                    <p>Duis autem vel eum iriure dolor in hendrerit in</p>
                                                </div>
                                            </div>{/* single-cta */}
                                            {/* single-cta */}
                                            <div className="col-lg-4">
                                                <div className="single-cta">
                                                    {/* cta-icon */}
                                                    <div className="cta-icon icon-support">
                                                        <img src="images/icon/14.png" alt="Icon" className="img-fluid" />
                                                    </div>{/* cta-icon */}
                                                    <h4>24/7 Support</h4>
                                                    <p>Duis autem vel eum iriure dolor in hendrerit in</p>
                                                </div>
                                            </div>{/* single-cta */}
                                            {/* single-cta */}
                                            <div className="col-lg-4">
                                                <div className="single-cta">
                                                    {/* cta-icon */}
                                                    <div className="cta-icon icon-trading">
                                                        <img src="images/icon/15.png" alt="Icon" className="img-fluid" />
                                                    </div>{/* cta-icon */}
                                                    <h4>Easy Trading</h4>
                                                    <p>Duis autem vel eum iriure dolor in hendrerit in</p>
                                                </div>
                                            </div>{/* single-cta */}
                                        </div>{/* row */}
                                    </div>{/* cta */}
                                </div>{/* product-list */}
                                {/* advertisement */}
                                <div className="d-none d-md-block col-md-2">
                                    <div className="advertisement text-center">
{/*
                                        <a href="#"><img src="images/ads/1.jpg" alt="Images" className="img-fluid" /></a>
*/}
                                    </div>
                                </div>{/* advertisement */}
                            </div>{/* row */}
                        </div>{/* main-content */}
                    </div>{/* container */}
                </section>{/* main */}
            </div>

        );
    }
}

export default Search;