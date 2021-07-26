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
    delay: string;
}

export const Projects: React.FC = () =>{

    useEffect (() => {
        Aos.init({disable: 'mobile'});
        Aos.refresh();
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
                        <InteractiveCard  img={'ideaverse.webp'} projectName={'IdeaVerse'} projectDesc={'A flappy bird clone made using JavaScript, HTML and CSS.'} projectGithub={'flappy_bird'} projectCodepen={''}/>
                        <InteractiveCard  img={'ideamaze.webp'} projectName={'Idea Maze'} projectDesc={'Maze game with a timer, made using JavaScript, HTML and CSS.'} projectGithub={'maze_game'} projectCodepen={''}/>
                        <InteractiveCard  img={'differences.webp'} projectName={'Idea Differences'} projectDesc={'Find the difference game made using JavaScript, HTML and CSS.'} projectGithub={'difference_game'} projectCodepen={''}/>
                        <InteractiveCard  img={'ideaspace.webp'} projectName={'Idea SpaceDefender'} projectDesc={'Space Invaders clone made using JavaScript, HTML and CSS.'} projectGithub={'space_invaders'} projectCodepen={''}/>
                        <InteractiveCard  img={'quizie.webp'} projectName={'Quizzie'} projectDesc={'General knowledge quiz made using React, Redux, Typescript, HTML and CSS.'} projectGithub={'quiz_app'} projectCodepen={''}/>
                        <InteractiveCard  img={'stranger.webp'} projectName={'Stranger'} projectDesc={'Social media made using JavaScript, React, Redux, NodeJS, MongoDB and SocketIO.'} projectGithub={'social_media'} projectCodepen={''}/>
                        <InteractiveCard  img={'todos.webp'} projectName={'TODO list'} projectDesc={'TODO list with MVC structure, made using NodeJS, JavaScript, MongoDB and EJS.'} projectGithub={'to_do_list_app'} projectCodepen={''}/>
                        <InteractiveCard  img={'cart.webp'} projectName={'eCommerce'} projectDesc={'eCommerce shopping cart made using React, Redux, NodeJS and MongoDB.'} projectGithub={'e_commerce_site'} projectCodepen={''}/>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
