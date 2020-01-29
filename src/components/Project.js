import React from 'react';
import data from '../data';
import Fade from 'react-reveal/Fade';

import myli from '../media/MYLI16.png';
import spoti from '../media/spotitheme.png';
import qrlib from '../media/QRLIB.png';

const Project = ({
  urlLive = null,
  url,
  imageSrc,
  title,
  service,
  desc,
  contact = null,
  github = null,
}) => {
  console.log(title);
  console.log(github);

  return (
    <Fade bottom>
      <div className="project">
        <a href={url}>
          <img className="project-image" src={getCorrectImage(imageSrc)} />
        </a>
        <h1>{title}</h1>
        <span>{service}</span>
        <p>{desc}</p>
        {github !== null && (
          <div className="header">
            <button style={{ background: '#9352ae' }}>
              <a href={github} rel="noopener noreferrer" target="_blank">
                Check out on GitHub!
              </a>
            </button>
          </div>
        )}
        {urlLive !== null && (
          <div id="urlButton" className="header" style={{ marginTop: 20 }}>
            <button>
              <a href={url} rel="noopener noreferrer" target="_blank">
                Check out live version!
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
              <a href={`mailto:${contact.mail}`} rel="noopener noreferrer">
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
    case 'qrlib':
      return qrlib;
    default:
      return myli;
  }
};

export default Project;
