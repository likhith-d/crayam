import React, { Component } from "react";
import "../css/Home.css";
import logo from "../assets/crayam.svg"; // Importing the SVG

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignUp: false, // State to toggle between login and sign-up forms
    };
  }

  // Function to toggle between Login and Sign-Up
  toggleForm = () => {
    this.setState({ isSignUp: !this.state.isSignUp });
  };

  render() {
    return (
      <div className="home urbanist">
        <div className="home_container">
          <div className="left">
            <div className="home-logo">
              <p className="logo-part-1">c</p>
              <p className="logo-part-2">rayam</p>
              <img src={logo} alt="Crayam Logo" className="logo-image" />
            </div>
            <p>
              Crayam is a next-generation e-commerce platform designed to redefine online shopping with a seamless, customer-centric experience.
              Offering a diverse range of high-quality products, from trendy fashion and innovative gadgets to home essentials and lifestyle accessories, 
              Crayam brings affordability and convenience under one roof.
              <br />
              <br />
              At Crayam, we believe in blending creativity with commerce, offering exclusive, handpicked collections that cater to every need. 
              Whether you're looking for the latest tech, stylish apparel, or unique home décor, Crayam is your go-to destination for all things trendy and practical.
            </p>
          </div>

          <div className="right">
            {this.state.isSignUp ? (
              <div className="signup_form">
                <div className="login_heading">Create an Account</div>
                <br></br><br></br>
                <div className="right-text">Full Name:</div>
                <input type="text" placeholder="Your Full Name" />
                <br />
                <div className="right-text">Email:</div>
                <input type="email" placeholder="you @ example.com" />
                <br />
                <div className="right-text">Password:</div>
                <input type="password" placeholder="Enter Your Password" />
                <br />
                <button>Sign Up</button>
                <br />
                <div className="NewAccount">
                  Already have an account?{" "}
                  <a href="#" onClick={this.toggleForm}>
                    Login Here
                  </a>
                </div>
              </div>
            ) : (
              <div className="login_form">
                <div className="login_heading">Welcome Back!</div>
                <br />
                <div className="right-text">Email:</div>
                <input type="email" placeholder="you @ example.com" />
                <br />
                <div className="right-text">Password:</div>
                <input type="password" placeholder="Enter Your password" />
                <br />
                <button>Login</button>
                <br />
                <div className="NewAccount">
                  Don't have an account?{" "}
                  <a href="#" onClick={this.toggleForm}>
                    Create an Account Here
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
