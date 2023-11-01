import React from 'react';
import './OurTeam.css';
import SectionTitle from '../Generics/SectionTitle';
import Button from '../Generics/Button';

import kristine_palmer from '../../assets/images/kristine-palmer.svg';
import mark_aubri from '../../assets/images/mark-aubri.svg';
import kimberly_hansen from '../../assets/images/kimberly-hansen.svg';
import justin_willoman from '../../assets/images/justin-willoman.svg';
import yellow_dots from '../../assets/images/dots-yellow.svg';

const OurTeam = () => {
    return (
        <section className="meet-our-team">
            <div className="container">
                <div className='header'>
                </div>
                <div className='header'>
                    <SectionTitle className="section-title" subtitle="Meet Our Team" title="Experience Team Members" />
                        <div className="browse-button">
                            <Button className="btn-transparent" text="Browse Team" url="/team" />
                        </div>
                </div>
                <div className="image-section">
                    <div className="team-member">
                        <img src={kristine_palmer} alt="woman with short brown hair" />
                        <h3>Kristine Palmer</h3>
                        <p>Chef Operation Officer</p>
                    </div>
                    <div className="team-member">
                        <img src={mark_aubri} alt="man in a black suit" />
                        <h3>Mark Aubri</h3>
                        <p>Senior Consultant</p>
                    </div>
                    <div className="team-member">
                        <img src={kimberly_hansen} alt="woman in a black dress holding a magazine" />
                        <h3>Kimberly Hansen</h3>
                        <p>Senior Consultant</p>
                    </div>
                    <div className="team-member">
                        <img src={justin_willoman} alt="man in a black jacket" />
                        <h3>Justin Willoman</h3>
                        <p>Senior Tech Consultant</p>
                    </div>
                </div>
                <div className="center-content">
                    <img src={yellow_dots} alt="five gray and black dots on a yellow background" />
                </div>
            </div>
        </section>
    )
}

export default OurTeam