import React from 'react';
import './Footer.scss'
export default props => (
    <footer className="row main">
        <div className="col-12">
            <div className="footer-category-links">
                <ul className="nav nav-fill">
                    <li className="nav-item"><a href="#" className="nav-link"><h2>Women</h2></a></li>
                    <li className="nav-item"><a href="#" className="nav-link"><h2>Men</h2></a></li>
                    <li className="nav-item"><a href="#" className="nav-link"><h2>Kids</h2></a></li>
                    <li className="nav-item"><a href="#" className="nav-link"><h2>Shoes</h2></a></li>
                    <li className="nav-item"><a href="#" className="nav-link"><h2>Brands</h2></a></li>
                </ul>
            </div>
            <div>
                <ul className="social nav">
                    <li className="nav-item"><a href="#" className="nav-link"><img src="./assets/img/icons-instagram-black.png" alt="Instagram" /></a></li>
                    <li className="nav-item"><a href="#" className="nav-link"><img src="./assets/img/icons-pinterest-black.png" alt="Pinterest" /></a></li>
                    <li className="nav-item"><a href="#" className="nav-link"><img src="./assets/img/icons-twitter-black.png" alt="Pinterest" /></a></li>
                    <li className="nav-item"><a href="#" className="nav-link"><img src="./assets/img/icons-facebook-black.png" alt="Pinterest" /></a></li>
                </ul>
            </div>
            <div className="footer-copyr">
                <p> &copy; shop Ltd &#46; <a href="#">Contact</a>  &#46; <a href="#">Privacy Policy</a> </p>
            </div>
        </div>
    </footer>
)