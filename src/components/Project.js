import React from 'react';
import data from '../data';
import Fade from 'react-reveal/Fade';

import myli from '../media/MYLI16.png';
import spoti from '../media/spotitheme.png';

const Project = ({
    url,
    imageSrc,
    title,
    service,
    desc,
    contact = null,
    gitHub = null
}) => {
    return (
        <Fade bottom>
            <div className='project'>
                <a href={url}>
                    <img
                        className='project-image'
                        src={getCorrectImage(imageSrc)}
                    />
                </a>
                <h1>{title}</h1>
                <span>{service}</span>
                <p>{desc}</p>
                {gitHub !== null && (
                    <div className='header-title'>
                        <button>
                            <a href='https://github.com/Jonatan-Vahlberg/spoti-theme'>
                                Check out on GitHub!
                            </a>
                        </button>
                    </div>
                )}
                {contact !== null && (
                    <div>
                        <p>
                            Name: <b>{contact.name}</b>, {contact.title}
                        </p>
                        <p>
                            {'Mail: '}
                            <a
                                href={`mailto:${contact.mail}`}
                                rel='noopener noreferrer'>
                                <b>{contact.mail}</b>
                            </a>
                        </p>
                        <p>
                            Phone: <b>{contact.phone}</b>
                        </p>
                    </div>
                )}
            </div>
        </Fade>
    );
};

const getCorrectImage = title => {
    switch (title) {
        case 'myli':
            return myli;
        case 'spoti':
            return spoti;
        default:
            return myli;
    }
};

export default Project;
