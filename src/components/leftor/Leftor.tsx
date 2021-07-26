import React from 'react';
import './Leftor.css';
import {IState as Props} from '../timeline/Timeline';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

interface IProps {
    page: Props['page'];
    setPage: React.Dispatch<React.SetStateAction<Props['page']>>;
    isFlipped: Props['isFlipped'];
    setIsFlipped: React.Dispatch<React.SetStateAction<Props['isFlipped']>>;
}

export const Leftor: React.FC<IProps> = ({page, setPage, isFlipped, setIsFlipped}) => {

    const handleClick = ():void => {
        setIsFlipped(!isFlipped);
        setTimeout(function() {
            setPage('home');
          }, 150);
    }

    return (
        <div className="leftor">
            <div className="leftorTop">
                <h1 className="leftorTitle">Web Developer</h1>
                <button className="back" onClick={handleClick}><KeyboardBackspaceIcon className='backIco' fontSize="large" /></button>
            </div>
            <div className="leftorBottom">
                <div><h3 className="leftorTitle">Leftor, Tuzla, Bosnia and Herzegovina</h3>
                    <h6 className="leftorTitle">Leftor is one of the biggest web hosting and web development companies in Bosnia and Herzegovina.</h6>
                    <h6 className="leftorInfo">Role:</h6>
                    <p className="leftorTasks">&emsp;&emsp;Front-end development (mostly). Built practice apps in JavaScript</p>
                    <h6 className="leftorInfo">Technical environment:</h6>
                    <ul className="leftorTasks">
                        <li>JavaScript ES6</li>
                        <li>TypeScript</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Bootstrap</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
