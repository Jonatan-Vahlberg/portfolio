import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

class Header extends Component {
    state = {};

    render() {
        return (
            <div className='header'>
                <Fade bottom>
                    <div className='header-title'>
                        <p>
                            {data.headerTagline[0]}
                            <br></br>
                            {data.headerTagline[1]}
                            <br></br>
                            {data.headerTagline[2]}
                            <br></br>
                        </p>
                    </div>
                    <div className='subheader'>
                        <button>
                            <a
                                href={`mailto:${data.contactEmail}`}
                                rel='noopener noreferrer'>
                                Contact
                            </a>
                        </button>
                        <a
                            href='https://github.com/Jonatan-Vahlberg'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <FaGithub className='icon ' size='40' />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/jonatan-ramses-vahlberg-b9185613a/'
                            target='_blank'
                            rel='noopener noreferrer'>
                            <FaLinkedin className='icon linked' size='40' />
                        </a>
                    </div>
                </Fade>
            </div>
        );
    }
}

export default Header;
