import React from 'react';
import './Comversum.css';
import {IState as Props} from '../timeline/Timeline';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

interface IProps {
    page: Props['page'];
    setPage: React.Dispatch<React.SetStateAction<Props['page']>>;
    isFlipped: Props['isFlipped'];
    setIsFlipped: React.Dispatch<React.SetStateAction<Props['isFlipped']>>;
}

export const Comversum: React.FC<IProps> = ({page, setPage, isFlipped, setIsFlipped}) => {

    const handleClick = ():void => {
        setIsFlipped(!isFlipped);
        setTimeout(function() {
            setPage('home');
          }, 150);
    }

    return (
        <div className="comversum">
            <div className="comversumTop">
                <h1 className="comversumTitle">System Administrator</h1>
                <button className="back" onClick={handleClick}><KeyboardBackspaceIcon className='backIco' fontSize="large" /></button>
            </div>
            <div className="comversumBottom">
                <div><h3 className="comversumTitle">Comversum, Tuzla, Bosnia and Herzegovina</h3>
                    <h6 className="comversumTitle">Comversum is a Cybersecurity company based in Tuzla. They offer one of worlds best security solutions, like Sophos.</h6>
                    <h6 className="comversumInfo">Tasks:</h6>
                    <ul className="comversumTasks">
                        <li>Setting up and maintaining HP switches</li>
                        <li>Setting up and maintaining Ruckus switches</li>
                        <li>Setting up and maintaining HP servers</li>
                        <li>Setting up and maintaining Ruckus access points</li>
                        <li>VMWare installation, configuration and administration</li>
                        <li>Configuration and administration of Sophos firewalls, access points and endpoint protection</li>
                        <li>Installation, configuration and administration of network equipment in public transportation</li>
                        <li>Settin up 3CX and fixing problems that ocur</li>
                        <li>Fixing problems with computers</li>
                        <li>Managing Comversum's network</li>
                        <li>Fixing printers</li>
                        <li>Diagnosing problems with servers, computers and otherIT quipment (Troubleshooting)</li>
                        <li>Backup and restore using Veeam</li>
                        <li>Installation, configuration and administration of Windows and Ubuntu servers</li>
                        <li>Maintainance of IT systems using SolarWinds</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
