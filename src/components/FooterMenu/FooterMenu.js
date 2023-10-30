import React from 'react'
import './FooterMenu.css'

import logotype_footer from '../../assets/images/logotype-footer.svg'

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
                        <a href="#">About</a>
                        <a href="#">Features</a>
                        <a href="#">Works</a>
                        <a href="#">Career</a>
                    </div>
                    <div className="item item-3">
                        <h4>Help</h4>
                        <a href="#">Costumer Support</a>
                        <a href="#">Delivery Details</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div className="item item-4">
                        <h4>Resources</h4>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorial</a>
                        <a href="#">How to - Blog</a>
                        <a href="#">Youtube Playlist</a>
                    </div>
                    <div className="item item-5">
                        <h4>Link</h4>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorial</a>
                        <a href="#">How to - Blog</a>
                        <a href="#">Youtube Playlist</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterMenu