import React from 'react';
import './HighSchool.css';
import {IState as Props} from '../timeline/Timeline';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

interface IProps {
    page: Props['page'];
    setPage: React.Dispatch<React.SetStateAction<Props['page']>>;
    isFlipped: Props['isFlipped'];
    setIsFlipped: React.Dispatch<React.SetStateAction<Props['isFlipped']>>;
}

export const HighSchool: React.FC<IProps> = ({page, setPage, isFlipped, setIsFlipped}) => {

    const handleClick = ():void => {
        setIsFlipped(!isFlipped);
        setTimeout(function() {
            setPage('home');
          }, 150);
    }
    return (
        <div className="highSchool">
            <div className="highSchoolTop">
                <h1 className="highSchoolTitle">High School</h1>
                <button className="back" onClick={handleClick}><KeyboardBackspaceIcon className='backIco' fontSize="large" /></button>
            </div>
            <div className="highSchoolBottom">
                <div><h3 className="schoolTitle">Mechanical High School</h3>
                    <h6 className="schoolTitle">Mixed High School, Banovići, Bosnia and Herzegovina</h6>
                    <p className="schoolInfo">As a child, I was good at math, phisycs and drawing, so I decided to apply for Mechanical High School.<br/>
                    Finishing high school as a best student in the class is somethin I can brag about. <br/>
                    High school helped me learn Mathematics, Physics, logic, and other skills which I can apply in programming today.<br/>
                    However, I didn't find myself in mechanical engineering, so I decided to start a career in IT.</p>
                </div>
            </div>
        </div>
    )
}
