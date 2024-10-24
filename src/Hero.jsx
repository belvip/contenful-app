import React from 'react';
import heroImg from './assets/hero.svg';

const Hero = () => {

    return <section className='hero'>

        <div className="hero-center">

            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>
                    Chartreuse locavore knausgaard, cronut four dollar toast unicorn kitsch craft beer microdosing 
                    seitan bodega boys photo booth pop-up. Gastropub iPhone jawn JOMO glossier small batch subway tile banh mi activated charcoal. Brunch jianbing thundercats, 
                    ethical tote bag asymmetrical whatever XOXO semiotics shaman hoodie man braid.
                </p>
            </div>

            <div className="img-container">
                <img src={heroImg} alt='Woman and the browser' className='imd' />
            </div>

        </div>

    </section>
        
}

export default Hero