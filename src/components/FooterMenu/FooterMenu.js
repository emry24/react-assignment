import React from 'react';
import './FooterMenu.css';
import { Link } from 'react-router-dom';

import logotype_footer from '../../assets/images/logotype-footer.svg';

const FooterMenu = () => {
    return (
        <div className="footer-menu">
            <div className="container">
                <div className="menu">
                    <div className="item item-1">
                        <img src={logotype_footer} alt="" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat obcaecati voluptas
                            voluptates!
                            Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                    </div>
                    <div className="item item-2">
                        <h4>Company</h4>
                        <Link to="#">About</Link>
                        <Link to="#">Features</Link>
                        <Link to="#">Works</Link>
                        <Link to="#">Career</Link>
                    </div>
                    <div className="item item-3">
                        <h4>Help</h4>
                        <Link to="#">Costumer Support</Link>
                        <Link to="#">Delivery Details</Link>
                        <Link to="#">Terms & Conditions</Link>
                        <Link to="#">Privacy Policy</Link>
                    </div>
                    <div className="item item-4">
                        <h4>Resources</h4>
                        <Link to="#">Free eBooks</Link>
                        <Link to="#">Development Tutorial</Link>
                        <Link to="#">How to - Blog</Link>
                        <Link to="#">Youtube Playlist</Link>
                    </div>
                    <div className="item item-5">
                        <h4>Link</h4>
                        <Link to="#">Free eBooks</Link>
                        <Link to="#">Development Tutorial</Link>
                        <Link to="#">How to - Blog</Link>
                        <Link to="#">Youtube Playlist</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterMenu