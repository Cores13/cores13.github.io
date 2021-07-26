import React from 'react';
import './HelpDesk.css';
import {IState as Props} from '../timeline/Timeline';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

interface IProps {
    page: Props['page'];
    setPage: React.Dispatch<React.SetStateAction<Props['page']>>;
    isFlipped: Props['isFlipped'];
    setIsFlipped: React.Dispatch<React.SetStateAction<Props['isFlipped']>>;
}

export const HelpDesk: React.FC<IProps> = ({page, setPage, isFlipped, setIsFlipped}) => {

    const handleClick = ():void => {
        setIsFlipped(!isFlipped);
        setTimeout(function() {
            setPage('home');
          }, 150);
    }
    
    return (
        <div className="helpDesk">
            <div className="helpDeskTop">
                <h1 className="helpDeskTitle">Internship</h1>
                <button className="back" onClick={handleClick}><KeyboardBackspaceIcon className='backIco' fontSize="large" /></button>
            </div>
            <div className="helpDeskBottom">
                <div><h3 className="helpDeskTitle">Help Desk</h3>
                    <h6 className="helpDeskTitle">American University in Bosnia and Herzegovina, Tuzla, Bosnia and Herzegovina</h6>
                    <h6 className="helpDeskInfo">Tasks:</h6>
                    <ul className="helpDeskTasks">
                        <li>IT Technical and Ticketing Support</li>
                        <li>Maintainance of technology devices like PC's, Laptops, Smart boards and projectors</li>
                        <li>Network configuration and administration</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
