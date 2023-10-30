import React from 'react'
import './BrandsSection.css'

import img_logotype_paperz from '../../assets/images/logotype-paperz.svg'
import img_logotype_dorfus from '../../assets/images/logotype-dorfus.svg'
import img_logotype_martino from '../../assets/images/logotype-martino.svg'
import img_logotype_square from '../../assets/images/logotype-square.svg'
import img_logotype_gobona from '../../assets/images/logotype-gobona.svg'

const BrandsSection = () => {
    return (
        <div className="brands">
            <div className="container">
                <img src={img_logotype_paperz} alt="Logotype of a company named Paperz" />
                <img src={img_logotype_dorfus} alt="Logotype of a company named Dorfus" />
                <img src={img_logotype_martino} alt="Logotype of a company named Martino" />
                <img src={img_logotype_square} alt="Logotype of a company named Square" />
                <img src={img_logotype_gobona} alt="Logotype of a company named Gobona" />
            </div>
        </div>
    )
}

export default BrandsSection