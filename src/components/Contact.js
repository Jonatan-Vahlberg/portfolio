import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';

class Contact extends React.Component {
    render() {
        return (
            <div className='Scrollable-Block contact' name='contact'>
                <h1 className='title contact-title'>
                    <Fade bottom cascade>
                        {' '}
                        Contact.
                    </Fade>
                </h1>
                <Fade bottom>
                    <div className='contact-content'>
                        <h1>
                            I look forward to <br></br>
                            <span className='amazing-color'>
                                hearing from you
                            </span>
                        </h1>
                        <ul>
                            {data.social.map((link, index) => (
                                <li key={index}>
                                    {link.name == 'Email' ? (
                                        <a href={`mailto:${data.contactEmail}`}>
                                            {link.name}
                                        </a>
                                    ) : (
                                        <a
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            href={link.url}>
                                            {link.name}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Contact;
