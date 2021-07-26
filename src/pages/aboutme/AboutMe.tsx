import {useState, useEffect} from 'react';
import './AboutMe.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import ReactCardFlip from 'react-card-flip'
import {makeStyles} from '@material-ui/core/styles';
import CachedIcon from '@material-ui/icons/Cached';

const useStyles = makeStyles((theme) => ({
  
    paper: {
      padding: '6px 16px',
    },
    secondaryTail: {
      backgroundColor: theme.palette.secondary.main,
    },
  }));
  export interface IState {
    isFlipped: boolean;
  }

export const AboutMe: React.FC = () =>{
    const [isFlipped, setIsFlipped] = useState<IState['isFlipped']>(false);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        setIsFlipped(!isFlipped);
      }


      useEffect (() => {
        Aos.init({disable: 'mobile'});
        Aos.refresh();
    }, []);


    return (
        <>
        <div className='bg-color' >
                <div className='aboutmeWrapper' data-aos='zoom-in' data-aos-duration="600" data-aos-easing="linear">
                    <div className="aboutme">
                        <div className="aboutmeLeft">
                            <h1 className='aboutmeTitle'>About Me</h1><br></br>
                            <h3 className='aboutmeInfoName'>Amir Kasumović</h3>
                            <p className="aboutmeInfo"><i className="fas fa-university"></i>Engineer of Information Technology</p>
                            <p className="aboutmeInfo"><i className="fas fa-map-marker-alt"></i>Tuzla, Bosnia and Herzegovina</p>
                            {/* <p className="aboutmeInfo"><i className="far fa-envelope"></i>amir.kasumovic@live.com</p>
                            <p className="aboutmeInfo"><i className="fas fa-phone-alt"></i>+387 61-248/126</p> */}
                            <a className="aboutmeInfo" href="https://ba.linkedin.com/in/amir-kasumovic-b02507163" target="_blank" rel="noopener noreferrer"><i style={{color: "rgb(17, 190, 190)", margin: '0', marginRight: '15px'}} className="fab fa-linkedin"></i>LinkedIn</a>
                            <a className="aboutmeInfo" href="https://github.com/Cores13" target="_blank" rel="noopener noreferrer"><i style={{color: "rgb(17, 190, 190)", margin: '0', marginRight: '15px'}} className="fab fa-github"></i>Github</a>
                        </div>
                        <div className="aboutmeRight">
                            <div className="aboutmeRightTop">
                                <h3 className="aboutmeDescTitle">Personal statement</h3>
                                <p className="aboutmeDescText">My passion for Programming started when I was 15 years old. Those days I was using all my 
                                free time to practice Programming, which made me realize that Web development will be my future career. 
                                Enrolling in the College of Information Technologies was my first step toward becoming a Web developer. 
                                Excellent grades from Java, C++, Python and PHP Programming courses gave my Professors a challenge so I was 
                                constantly pushed with even more difficult tasks. However, I was constantly hungry for  knowledge so I finished 
                                the C Programming course with the award as the best student that year. As a Junior, I got enrolled in an internship 
                                as System Administrator, which helped me in learning Networking and Cloud technologies like Microsoft Azure and AWS. 
                                Moreover, my knowledge about Sophos, Veeam and 3CX was proven by certificates that I achieved by completing their 
                                training courses. I want to become an expert in Web development and contribute to the further growth of the IT industry. 
                                What distinguishes me from the others is that I never give up. I learn both from a failure and a success, which makes my path towards excellence guaranteed.</p>                                
                            </div>
                            <div className="aboutmeRightBottom">
                                <div className="aboutmeRightBottomTop">
                                    <h3 className="aboutmeSkillsTitle">{isFlipped ? 'System administration skills' : 'Programming skills'}</h3>
                                    <button className="back" onClick={handleClick}><CachedIcon className="backIcon"/>Flip</button>
                                </div>

                                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                                    <div className="animatedDiv">
                                        <div className="aboutmeRightBottomSkills">
                                            <div className="progress">
                                                <div className="progress-done" style={{width: '90%'}}>
                                                &emsp;&emsp;JavaScript
                                                </div>
                                            </div>
                                        
                                            <div className="progress">
                                                <div className="progress-done" style={{width: '60%'}}>
                                                &emsp;&emsp;TypeScript
                                                </div>
                                            </div>
                                        
                                            <div className="progress">
                                                <div className="progress-done" style={{width: '85%'}}>
                                                &emsp;&emsp;React
                                                </div>
                                            </div>
                                        
                                            <div className="progress">
                                                <div className="progress-done" style={{width: '65%'}}>
                                                &emsp;&emsp;Redux
                                                </div>
                                            </div>
                                        
                                            <div className="progress">
                                                <div className="progress-done" style={{width: '80%'}}>
                                                &emsp;&emsp;NodeJS
                                                </div>
                                            </div>
                                        
                                            <div className="progress">
                                                <div className="progress-done" style={{width: '100%'}}>
                                                &emsp;&emsp;HTML
                                                </div>
                                            </div>

                                            <div className="progress">
                                                <div className="progress-done" style={{width: '95%'}}>
                                                &emsp;&emsp;CSS
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>

                                    {/* ===================================================== */}

                                    <div>
                                        <div className="aboutmeRightBottomSkills">
                                            <div className="progress">
                                                <div className="progress-done" style={{width: '80%'}}>
                                                &emsp;&emsp;Network Security
                                                </div>
                                            </div>
                                        
                                            <div className="progress">
                                                <div className="progress-done" style={{width: '90%'}}>
                                                &emsp;&emsp;TCP/IP
                                                </div>
                                            </div>
                                        
                                            <div className="progress">
                                                <div className="progress-done" style={{width: '70%'}}>
                                                &emsp;&emsp;Virtualization
                                                </div>
                                            </div>

                                            <div className="progress">
                                                <div className="progress-done" style={{width: '50%'}}>
                                                &emsp;&emsp;VoIP
                                                </div>
                                            </div>
                                        
                                            <div className="progress">
                                                <div className="progress-done" style={{width: '60%'}}>
                                                &emsp;&emsp;Backup and Restore
                                                </div>
                                            </div>
                                        
                                            <div className="progress">
                                                <div className="progress-done" style={{width: '100%'}}>
                                                &emsp;&emsp;Monitoring
                                                </div>
                                            </div>

                                            <div className="progress">
                                                <div className="progress-done" style={{width: '100%'}}>
                                                &emsp;&emsp;Troubleshooting
                                                </div>
                                            </div>
                                        </div>
                                
                                    </div>
                                </ReactCardFlip>

                                {/* <div className="aboutmeRightBottomSkills">
                                    <div className="progress">
                                        <div className="progress-done" style={{width: '95%'}}>
                                        &emsp;&emsp;JavaScript
                                        </div>
                                    </div>
                                
                                    <div className="progress">
                                        <div className="progress-done" style={{width: '60%'}}>
                                        &emsp;&emsp;TypeScript
                                        </div>
                                    </div>
                                
                                    <div className="progress">
                                        <div className="progress-done" style={{width: '70%'}}>
                                        &emsp;&emsp;React
                                        </div>
                                    </div>
                                
                                    <div className="progress">
                                        <div className="progress-done" style={{width: '65%'}}>
                                        &emsp;&emsp;Redux
                                        </div>
                                    </div>
                                
                                    <div className="progress">
                                        <div className="progress-done" style={{width: '80%'}}>
                                        &emsp;&emsp;NodeJS
                                        </div>
                                    </div>
                                
                                    <div className="progress">
                                        <div className="progress-done" style={{width: '100%'}}>
                                        &emsp;&emsp;HTML
                                        </div>
                                    </div>

                                    <div className="progress">
                                        <div className="progress-done" style={{width: '100%'}}>
                                        &emsp;&emsp;CSS
                                        </div>
                                    </div>
                                </div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
