import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                  <a href className="text-decoration-none d-block d-lg-none">
                    <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                  </a>
                  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div className="navbar-nav mr-auto py-0">
                      <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                      <NavLink to="/shop" className="nav-item nav-link">Shop</NavLink>
                      <NavLink to="/datail" className="nav-item nav-link">Shop Detail</NavLink>
                      <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu rounded-0 m-0">
                          <NavLink to="/cart" className="dropdown-item">Shopping Cart</NavLink>
                          <NavLink to="/checkout" className="dropdown-item">Checkout</NavLink>
                        </div>
                      </div>
                      <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                    </div>
                    <div className="navbar-nav ml-auto py-0">
                      <a href className="nav-item nav-link">Login</a>
                      <a href className="nav-item nav-link">Register</a>
                    </div>
                  </div>
                </nav>
      </>
    )
  }
}
