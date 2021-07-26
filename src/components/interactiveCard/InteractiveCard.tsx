import React, {useEffect, useState} from 'react';
import './InteractiveCard.css';
import Tilt from 'react-parallax-tilt';
import {IProps as Props} from '../../pages/projects/Projects';
import Aos from 'aos'
import 'aos/dist/aos.css'

interface IProps {
    img: Props['img'];
    projectName: Props['projectName'];
    projectDesc: Props['projectDesc'];
    projectGithub: Props['projectGithub'];
    projectCodepen: Props['projectCodepen'];
}

export const InteractiveCard: React.FC<IProps>= ({img, projectName, projectDesc, projectGithub, projectCodepen}) => {

    useEffect (() => {
        Aos.init({})
    }, []);
    
      return (
        <>
            <div className="cardWrapper">
                <Tilt perspective={3000} gyroscope={true} scale={1.07} glareEnable={true} tiltMaxAngleX={11} tiltMaxAngleY={11} glareMaxOpacity={0.08} glareColor={'rgb(17,190,190), rgb(241,13,115) '} glarePosition={'all'}>
                <div className="card">
                    <div className="cardTop">
                        <img className='cardImg' src={`./images/${img}`} alt={`${img}`} />
                    </div>
                    <div className="cardBottom">
                        <h4 className='cardTitle'>{projectName}</h4>
                        <p className='cardDesc'>{projectDesc}</p>
                        <a className='cardGithub' href={`https://github.com/Cores13/${projectGithub}`} target='_blank' rel='noopener noreferrer'><i className="fab fa-github"></i></a>
                        {projectCodepen? <><a className='cardCodepen' href={`${projectCodepen}`} target='_blank' rel='noopener noreferrer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2" stroke-width="6.05"/></svg></a></>: null}
                    </div>
                </div>
                </Tilt>
            </div>
        </>
      )
    }