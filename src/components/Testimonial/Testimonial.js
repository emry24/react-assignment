import React from 'react';
import './Testimonial.css';
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
            <div className="section-title">
                <p>Testimonial</p>
                <h2>What Our Client Says</h2>
            </div>
            <div className="comments">
                <div>
                    <div className="comment-box">
                        <img className="stars" src={rating_stars} alt="five red stars" />
                        <div>
                            <i>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudiantium libero, ad
                                dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi
                                numquam
                                voluptate"</i>
                        </div>
                    </div>
                    <div className="clients">
                        <img src={cassandra_warren} alt="woman in a striped shirt" />
                        <div className="section-title">
                            <h3>Cassandra Warren</h3>
                            <p>Business Manager, Dorfus</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="comment-box">
                        <img className="stars" src={rating_stars} alt="five red stars" />
                        <div>
                            <i>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudiantium libero, ad
                                dignissimos
                                velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                                voluptate"</i>
                        </div>
                    </div>
                    <div className="clients">
                        <img src={amanda_tulling} alt="woman in a white cardigan"/>
                        <div className="section-title">
                            <h3>Amanda Tulling</h3>
                            <p>Senior Developer, Square</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="comment-box">
                        <img className="stars" src={rating_stars} alt="five red stars" />
                        <div>
                            <i>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudiantium libero, ad
                                dignissimos
                                velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam
                                voluptate"</i>
                        </div>
                    </div>
                    <div className="clients">
                        <img src={jack_macdogglas} alt="man in a white shirt" />
                        <div className="section-title">
                            <h3>Jack McDogglas</h3>
                            <p>Key Account Manager, Gobona</p>
                        </div>
                    </div>
                </div>
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