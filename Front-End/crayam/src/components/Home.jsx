    import React, { Component } from "react";
    import "../css/Home.css";
    import logo from "../assets/crayam.svg"; // Importing the SVG

    export class Home extends Component {
    render() {
        return (
        <div className="home">
            <div className="home-container">
                <div className="home-logo">
                    <p className="logo-part-1">c</p>
                    <p className="logo-part-2">rayam</p>
                    <img src={logo} alt="Crayam Logo" className="logo-image" />
                </div>
            </div>
            <div className="content">
                Crayam is a next-generation e-commerce platform designed to redefine online shopping with a seamless,
                customer-centric experience. Offering a diverse range of high-quality products,
                from trendy fashion and innovative gadgets to home essentials and lifestyle accessories,
                Crayam brings affordability and convenience under one roof.
            </div>
            <div className="big">
                We Are Launching Soon !
            </div>
        </div>
        );
    }
    }

    export default Home;
