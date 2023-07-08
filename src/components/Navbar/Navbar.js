import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
  // constructor(props){
  //     super(props);
  //     this.state = {}
  // }
  render() {
    return (
      <div>
        
        <div className="navbar__component">
          <div className="navbar__logo"></div>

          <div className="navbar__locator">
            <div className="navbar__locationImage"></div>
            <div className="navbar__location">Select Your Address</div>
          </div>

          <div className="navbar__searchComponent">
            <div className="navbar__searchDropdown">
              <select>
                <option value="All">All</option>
                <option value="Alexa">Alexa</option>
                <option value="Books">Books</option>
                <option value="Beauty">Beauty</option>
                <option value="Cloths">Cloths</option>
              </select>
            </div>
            <div>
              <input type="text" className="navbar__searchbox"></input>
            </div>
            <div className="navbar__searchBoxDiv">
              <div className="navbar__searchIcon"></div>
            </div>
          </div>

          <div className="navbar__signIn">
            <div style={{ fontSize: "14px" }}>Hello, Sign in</div>
            <div style={{ fontWeight: "bold" }}>Acounts & Lists</div>
          </div>

          <div className="navbar__returns">
            <div style={{ fontSize: "14px" }}>Returns</div>
            <div style={{ fontWeight: "bold" }}> & Orders</div>
          </div>

          <div className="navbar__cart">
            <div className="navbar__cartIcon"></div>
            <div className="navbar__cartCount">0</div>
            <div className="navbar__cartText">Cart</div>
          </div>
        </div>

        <div className="navbar__footer">
            <div className="navbar__footer__text">Amazon miniTv</div>
            <div className="navbar__footer__text">Sell</div>
            <div className="navbar__footer__text">Best Sellers</div>
            <div className="navbar__footer__text">Mobiles</div>
            <div className="navbar__footer__text">Today's Deals</div>
            <div className="navbar__footer__text">Customer Service</div>
            <div className="navbar__footer__text">New Releases</div>
            <div className="navbar__footer__text">Electronics</div>
            <div className="navbar__footer__text">Home & Kitchen</div>
            <div className="navbar__footer__text">Amazon Pay</div>

        </div>
      
      </div>
    );
  }
}

export default Navbar;
