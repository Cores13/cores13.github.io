import React from 'react';
import './Ideaology.css';
import {IState as Props} from '../timeline/Timeline';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

interface IProps {
    page: Props['page'];
    setPage: React.Dispatch<React.SetStateAction<Props['page']>>;
    isFlipped: Props['isFlipped'];
    setIsFlipped: React.Dispatch<React.SetStateAction<Props['isFlipped']>>;
}

export const Ideaology: React.FC<IProps> = ({page, setPage, isFlipped, setIsFlipped}) => {

    const handleClick = ():void => {
        setIsFlipped(!isFlipped);
        setTimeout(function() {
            setPage('home');
          }, 150);
    }
    
    return (
        <div className="ideaology">
            <div className="ideaologyTop">
                <h1 className="ideaologyTitle">Web Developer</h1>
                <button className="back" onClick={handleClick}><KeyboardBackspaceIcon className='backIco' fontSize="large" /></button>
            </div>
            <div className="ideaologyBottom">
                <div><h3 className="ideaologyTitle">Ideaology, Tuzla, Bosnia and Herzegovina</h3>
                    <h6 className="ideaologyTitle">Ideaology is a company formed in Dubai, which is focused on building unique IDO platform based on blockchain.</h6>
                    <h6 className="ideaologyInfo">Role:</h6>
                    <p className="ideaologyTasks">&emsp;&emsp;Front-end development (mostly). Built IDO web platform using JavaScript, which is based on blockchain.</p>
                    <h6 className="ideaologyInfo">Technical environment:</h6>
                    <ul className="ideaologyTasks">
                        <li>JavaScript ES6</li>
                        <li>TypeScript</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Bootstrap framework</li>
                        <li>MongoDB</li>
                        <li>MySQL</li>
                        <li>VueJS</li>
                        <li>Vuetify</li>
                        <li>Bycrypt</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
