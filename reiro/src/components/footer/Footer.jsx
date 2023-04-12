import React, { useState } from "react";
import './footer.scss'

const Footer = () => {
    
    return(
        <div className="footer">
            <div className="container-box">
                <div className="box1">
                    <h4>About</h4>
                    <p><a href="/">Style Guide</a></p>
                    <p><a href="/">Features</a></p>
                    <p><a href="/">Contact</a></p>
                    <p><a href="/">404</a></p>
                </div>
                <div className="box1">
                    <h4>Features</h4>
                    <p><a href="/">Demos</a></p>
                    <p><a href="/">Light version</a></p>
                    <p><a href="/">Sepia version</a></p>
                    <p><a href="/">Dark version</a></p>
                </div>
                <div className="box1">
                    <h4>Membership</h4>
                    <p><a href="/">Editor’s Choice</a></p>
                    <p><a href="/">Membership</a></p>
                    <p><a href="/">Account Free</a></p>
                    <p><a href="/">Account Paid</a></p>
                </div>
                <div className="box1">
                    <h4>Resources</h4>
                    <p><a href="/">Sign in</a></p>
                    <p><a href="/">Sign up</a></p>
                    <p><a href="/">Tags</a></p>
                    <p><a href="/">Authors</a></p>
                </div>
                <div className="box1">
                    <h4>Company</h4>
                    <p><a href="/">fueko</a></p>
                    <p><a href="/">Showcase</a></p>
                    <p><a href="/">Get Theme</a></p>
                </div>
            </div>
            <div className="p">
                <p>© <a href="/">Reiro</a> 2023.Published with <a href="/">Ghost</a> and <a href="/">Reiro</a></p>
            </div>
        </div>
    )
}

export default Footer