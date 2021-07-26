import React from 'react';
import './University.css';
import {IState as Props} from '../timeline/Timeline';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

interface IProps {
    page: Props['page'];
    setPage: React.Dispatch<React.SetStateAction<Props['page']>>;
    isFlipped: Props['isFlipped'];
    setIsFlipped: React.Dispatch<React.SetStateAction<Props['isFlipped']>>;
}

export const University: React.FC<IProps> = ({page, setPage, isFlipped, setIsFlipped}) => {

    const handleClick = ():void => {
        setIsFlipped(!isFlipped);
        setTimeout(function() {
            setPage('home');
          }, 150);
    }

    return (
        <div className="university">
            <div className="universityTop">
                <h1 className="universityTitle">University</h1>
                <button className="back" onClick={handleClick}><KeyboardBackspaceIcon className='backIco' fontSize="large" /></button>
            </div>
            <div className="universityBottom">
                <div><h3 className="universityTitle">Engineer of Information Technology</h3>
                    <h6 className="universityTitle">American University in Bosnia and Herzegovina, Tuzla, Bosnia and Herzegovina</h6>
                    <p className="universityInfo">Enrolling in the College of Information Technologies was my first step toward becoming a Web developer. 
                    Excellent grades from Java, C++, Python and PHP Programming courses gave my Professors a challenge so I was constantly pushed 
                    with even more difficult tasks. However, I was constantly hungry for  knowledge so I finished the C Programming course with the 
                    award as the best student that year. As a Junior, I got enrolled in an internship as System Administrator, which helped me in learning 
                    Networking and Cloud technologies like Microsoft Azure and AWS. Moreover, my knowledge about Sophos, Veeam and 3CX was proven by certificates 
                    that I achieved by completing their training courses. I love challenges, and that is the reason I am still working hard. </p>
                </div>
            </div>
        </div>
    )
}
