import React, {useEffect} from 'react'
import './Projects.css'
import { InteractiveCard } from '../../components/interactiveCard/InteractiveCard';
import Aos from 'aos'
import 'aos/dist/aos.css'

export interface IProps {
    img?: string;
    projectName?: string;
    projectDesc?: string;
    projectGithub?: string;
    projectCodepen?: string;
}

export const Projects: React.FC = () =>{

    useEffect (() => {
        Aos.init({})
    }, []);

    return (
        <>
        <div className='bg-color' >
            <div className='projectsWrapper' data-aos='zoom-in' data-aos-duration="500" data-aos-easing="linear">
                <div className="projects">
                    <div className="projectsTop">
                        <h1 className="projectsTitle">Projects</h1>
                    </div>
                    <div className="projectsBottom">
                        <InteractiveCard img={''} projectName={'Todo list'} projectDesc={'erhusertuaserhtydetrherhusertua serhtydetrherhusertuaserhtydetrh'} projectGithub={''} projectCodepen={'erhsedhr'}/>
                        <InteractiveCard img={''} projectName={'Quizzie'} projectDesc={'erhusertuaserhtydetrherhusertuas erhtydetrherhusertuaserhtydetrh'} projectGithub={''} projectCodepen={''}/>
                        <InteractiveCard img={''} projectName={'Stranger'} projectDesc={'erhusertuaserhtydetrherhusertua serhtydetrherhusertuaserhtydetrh'} projectGithub={''} projectCodepen={''}/>
                        <InteractiveCard img={''} projectName={'eCommerce'} projectDesc={'erhusertuaserhtydetrherhusertu aserhtydetrherhusertuaserhtydetrh'} projectGithub={''} projectCodepen={''}/>
                        {/* <InteractiveCard img={''} projectName={'VueJS Practice site'} projectDesc={''} projectGithub={''} projectCodepen={''}/> */}
                        <InteractiveCard img={''} projectName={'IdeaVerse'} projectDesc={'erhusertuaserhtydetrherhuser tuaserhtydetrherhusertuaserhtydetrh'} projectGithub={''} projectCodepen={'hesrh'}/>
                        <InteractiveCard img={''} projectName={'IdeaMaze'} projectDesc={'erhusertuaserhtydetrhe rhusertuaserhtydetrh erhusertuaserhtydetrh'} projectGithub={''} projectCodepen={''}/>
                        <InteractiveCard img={''} projectName={'IdeaDifferences'} projectDesc={'erhusertuaserhtydetrherhusert uaserhtydetrherhusertuaserhtydetrh'} projectGithub={''} projectCodepen={''}/>
                        <InteractiveCard img={''} projectName={'Idea SpaceDefenter'} projectDesc={'erhusertuaserhtyde trherhusertuaserhtydetr herhusertuaserhtydetrh'} projectGithub={''} projectCodepen={''}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
