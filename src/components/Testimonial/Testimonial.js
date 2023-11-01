import React from 'react';
import './Testimonial.css';
import SectionTitle from '../Generics/SectionTitle';
import CommentBox from './CommentBox'
import Button from '../Generics/Button';

import rating_stars from '../../assets/images/rating-stars.svg';
import cassandra_warren from '../../assets/images/cassandra-warren.svg';
import amanda_tulling from '../../assets/images/amanda-tulling.svg';
import jack_macdogglas from '../../assets/images/jack-mcdogglas.svg';

const Testimonial = () => {
    return (
        <section className="testimonial">
            <div className="white-box">
                <div className="container">
                    <SectionTitle subtitle="Testimonial" title="What Our Client Says" />
                    <div className="comments">
                        <CommentBox text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudiantium libero, ad
                                dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi
                                numquam
                                voluptate" src={cassandra_warren} alt="woman in a striped shirt" name="Cassandra Warren" title="Business Manager, Dorfus" />
                        <CommentBox text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudiantium libero, ad
                                dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi
                                numquam
                                voluptate" src={amanda_tulling} alt="woman in a white cardigan" name="Amanda Tulling" title="Senior Developer, Square" />
                        <CommentBox text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudiantium libero, ad
                                dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi
                                numquam
                                voluptate" src={jack_macdogglas} alt="man in a white shirt" name="Amanda Tulling" title="Key Account Manager, Gobona" />
                    </div>
                    <div className="center-content">
                        <Button className="btn-black" text="All Reviews" url="/reviews" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial