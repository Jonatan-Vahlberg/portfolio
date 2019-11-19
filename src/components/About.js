import React from 'react';
import data from '../data';
import Fade from 'react-reveal/Fade';

import headshot from '../headshot_small.jpg';

class About extends React.Component {
    render() {
        return (
            <div className='Scrollable-Block about' name='about'>
                <h1 className='title'>
                    <Fade bottom cascade>
                        About
                    </Fade>
                </h1>
                <Fade bottom>
                    <p className='about-desc'>{data.abouttext}</p>
                </Fade>
                <img
                    className='about-image'
                    src={headshot}
                    alt={'about image'}
                />
            </div>
        );
    }
}

export default About;
