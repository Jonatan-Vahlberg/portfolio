import React from 'react';
import data from '../data';
import Project from './Project';
import Fade from 'react-reveal/Fade';

class Projects extends React.Component {
    render() {
        return (
            <div className='Scrollable-Block' name='projects'>
                <Fade bottom cascade>
                    <h1 className='projects-title title'>Projects.</h1>
                </Fade>
                <div className='projects'>
                    {data.projects.map(item => (
                        <Project {...item} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Projects;
