import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import data from '../data';
class Navbar extends React.Component {
    scrollToTop = () => scroll.scrollToTop();

    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link
                            className='link'
                            onClick={this.scrollToTop}
                            smooth>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to='about' smooth>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to='projects' smooth>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className='link' to='contact' smooth>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
