import React, {useEffect} from 'react'
import './Resume.css'
import {CustomTimeline as Timeline} from '../../components/timeline/Timeline'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Resume: React.FC = () =>{

    useEffect (() => {
        Aos.init({disable: 'mobile'});
        Aos.refresh();
    }, []);
    return (
        <>
            <div className='bg-color' >
                <div className='resumeWrapper' data-aos='zoom-in' data-aos-duration="600" data-aos-easing="linear">
                    <div className="resume">
                        <div className="resumeLeft">
                            <h1 className='resumeTitle'>Resume</h1><br></br>
                            <h3 className='resumeInfoName'>Amir Kasumović</h3>
                            <p className="resumeInfo"><i className="fas fa-university"></i>Engineer of Information Technology</p>
                            <p className="resumeInfo"><i className="fas fa-map-marker-alt"></i>Tuzla, Bosnia and Herzegovina</p>
                            {/* <p className="resumeInfo"><i className="far fa-envelope"></i>amir.kasumovic@live.com</p>
                            <p className="resumeInfo"><i className="fas fa-phone-alt"></i>+387 61-248/126</p> */}
                            <a className="resumeInfo" href="https://ba.linkedin.com/in/amir-kasumovic-b02507163" target="_blank" rel="noopener noreferrer"><i style={{color: "rgb(17, 190, 190)", margin: '0', marginRight: '15px'}} className="fab fa-linkedin"></i>LinkedIn</a>
                            <a className="resumeInfo" href="https://github.com/Cores13" target="_blank" rel="noopener noreferrer"><i style={{color: "rgb(17, 190, 190)", margin: '0', marginRight: '15px'}} className="fab fa-github"></i>Github</a>
                            <a className="resumeInfoDownload" href="https://drive.google.com/file/d/1latgqv3KIUHpqZK6JZAqGgiYI1JmFpKo/view?usp=drivesdk" target="_blank" rel="noopener noreferrer" download><i style={{color: "rgb(17, 190, 190)", margin: '0', marginRight: '15px'}} className="fab fa-google-drive"></i>View on Google Drive</a>
                        </div>
                        <div className="resumeRight">
                            <Timeline />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
