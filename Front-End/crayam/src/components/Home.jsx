    import React, { Component } from "react";
    import "../css/Home.css";
    import logo from "../assets/crayam.svg"; // Importing the SVG

    export class Home extends Component {
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
            <p>Crayam is a next-generation e-commerce platform designed to redefine online shopping with a seamless, customer-centric experience. Offering a diverse range of high-quality products, from trendy fashion and innovative gadgets to home essentials and lifestyle accessories, Crayam brings affordability and convenience under one roof.


<br></br> <br></br>
At Crayam, we believe in blending creativity with commerce, offering exclusive, handpicked collections that cater to every need. Whether you're looking for the latest tech, stylish apparel, or unique home décor, Crayam is your go-to destination for all things trendy and practical.</p>
            </div>
            <div className="right">      
                <div className="login_heading">
                    Welcome Back !
                </div>
                <br></br>
                <br></br>
                <div className="right-text">Email :</div>
                <input type="email" placeholder="crayam@crazy.go"/>
                <br></br>
                <div className="right-text">Password :</div>
                <input type="password" placeholder="top secret"/>
                <br></br>
                <button>Login</button>
            </div>
        </div>
        </div>
        );
    }
    }

    export default Home;
