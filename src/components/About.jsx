import React from 'react'; 
import Social from './Social';

const About = ({avatar, name, profession, bio, address, social}) => (

    <div className="About">
        <div className="About-container">
            <div className="About-figure">
                <figure>
                    <img src="https://www.facebook.com/photo.php?fbid=2578295008864010&set=a.153676937992508&type=3&theater" 
                    alt={name} />
                </figure>
            </div>
            <div className="About-name">
                <h2>{name}</h2>
            </div>
            <div className="About-profession">
                <p>Backend and Frontend developer</p>
            </div>
            <div className="About-desc">
                <p>Hello World! I am software developer.</p>
            </div>
            <div className="About-location">
                <p>San José, Costa Rica.</p>
            </div>
            <div className="About-social">
               <Social social={social} />  
            </div>
        </div>
    </div>

);

export default About;