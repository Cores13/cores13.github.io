import React from 'react';
import {useState, useEffect} from 'react';
import './Timeline.css';
import {makeStyles} from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import SchoolIcon from '@material-ui/icons/School';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import CodeIcon from '@material-ui/icons/Code';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {HighSchool} from '../highSchool/HighSchool';
import {University} from '../university/University';
import {HelpDesk} from '../helpDesk/HelpDesk';
import {Comversum} from '../comversum/Comversum';
import {Leftor} from '../leftor/Leftor';
import {Ideaology} from '../ideaology/Ideaology';
import Aos from 'aos'
import 'aos/dist/aos.css'
import ReactCardFlip from 'react-card-flip'

const useStyles = makeStyles((theme) => ({
  
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));



export interface IState {
  page: string | undefined;
  isFlipped: boolean;
}

export function CustomTimeline() {
  const [page, setPage] = useState<IState['page']>('home');
  const [isFlipped, setIsFlipped] = useState<IState['isFlipped']>(false);

  const classes = useStyles();  
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    setIsFlipped(!isFlipped);
  }

  useEffect(() => {
    setPage('home');
  }, []);
  
  useEffect (() => {
    Aos.init({
      startEvent: 'load',
      once: false,
    });
    // Aos.refresh();
    
  }, [page]);
  
  
  
  const project = () => {
    switch(page) {

      case "home":
       return (
      <>
        <Timeline align="alternate">

        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              May 2021 - Now
            </Typography>
          </TimelineOppositeContent>
    
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <CodeIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
    
          <TimelineContent>
            <button className="resumeTab" name="ideaology" onClick={(e) => handlePage(e)}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Web Developer
              </Typography>
              <Typography><strong>Ideaology</strong><br/>
              Lukavac, Bosnia and Herzegovina</Typography>
            </Paper>
            </button>
          </TimelineContent>
    
        </TimelineItem>



        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              Aug 2020 - Nov 2020
            </Typography>
          </TimelineOppositeContent>
    
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <CodeIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
    
          <TimelineContent className="resumeTab">
            <button className="resumeTab" name="leftor" onClick={(e) => handlePage(e)}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
              Web Developer
              </Typography>
              <Typography><strong>Leftor</strong><br/>
              Tuzla, Bosnia and Herzegovina</Typography>
            </Paper>
            </button>
          </TimelineContent>
    
        </TimelineItem>



        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              Oct 2019 - Jul 2020
            </Typography>
          </TimelineOppositeContent>
    
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
    
          <TimelineContent>
            <button className="resumeTab" name="comversum" onClick={(e) => handlePage(e)}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
              System Administrator
              </Typography>
              <Typography><strong>Comversum</strong><br/>
              Tuzla, Bosnia and Herzegovina</Typography>
            </Paper>
            </button>
          </TimelineContent>
    
        </TimelineItem>



        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              Oct 2018 - Jan 2019
            </Typography>
          </TimelineOppositeContent>
    
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
    
          <TimelineContent>
            <button className="resumeTab" name="helpDesk" onClick={(e) => handlePage(e)}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
              Help Desk
              </Typography>
              <Typography><strong>American University in Bosnia and Herzegovina</strong><br/>
              Tuzla, Bosnia and Herzegovina</Typography>
            </Paper>
            </button>
          </TimelineContent>
    
        </TimelineItem>



        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              Oct 2017 - Jul 2020
            </Typography>
          </TimelineOppositeContent>
    
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <SchoolIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
    
          <TimelineContent>
          <button className="resumeTab" name="university" onClick={(e) => handlePage(e)}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Engineer of Information Technology
              </Typography>
              <Typography><strong>American University in Bosnia and Herzegovina</strong><br/>
              Tuzla, Bosnia and Herzegovina</Typography>
            </Paper>
            </button>
          </TimelineContent>
        </TimelineItem>


      
        <TimelineItem >
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              Sep 2013 - Jun 2017
            </Typography>
          </TimelineOppositeContent>
    
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <SchoolIcon />
            </TimelineDot>
            {/* <TimelineConnector /> */}
          </TimelineSeparator>
          <TimelineContent >
            <button className="resumeTab" name="highSchool" onClick={(e) => handlePage(e)}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Mechanical High School
              </Typography>
              <Typography><strong>Mixed High School Banovići</strong><br/> Banovići, Bosnia and Herzegovina</Typography>
            </Paper>
            </button>
          </TimelineContent>
        </TimelineItem>
  
      </Timeline>
      </>);
      case "highSchool":   return <HighSchool page={page} setPage={setPage}  isFlipped={isFlipped} setIsFlipped={setIsFlipped}/>;
      case "university": return <University page={page} setPage={setPage} isFlipped={isFlipped} setIsFlipped={setIsFlipped}/>;
      case "helpDesk":  return <HelpDesk page={page} setPage={setPage} isFlipped={isFlipped} setIsFlipped={setIsFlipped}/>;
      case "comversum":  return <Comversum page={page} setPage={setPage} isFlipped={isFlipped} setIsFlipped={setIsFlipped}/>;
      case "leftor":  return <Leftor page={page} setPage={setPage} isFlipped={isFlipped} setIsFlipped={setIsFlipped}/>;
      case "ideaology":  return <Ideaology page={page} setPage={setPage} isFlipped={isFlipped} setIsFlipped={setIsFlipped}/>;
      default:      
        return <h1>No project match</h1>
    }
  }


  const handlePage = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    setIsFlipped(!isFlipped);
    const pagename: string = e.currentTarget.name;
    setTimeout(function() {
      setPage(pagename);
    }, 200);
  }

  return (
    <>
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div data-aos='flip-left' data-aos-delay="500" data-aos-duration="500" data-aos-easing="linear" className="animatedDiv">
        { project() }
          
        </div>

        <div>
        { project() }
    
        </div>
    </ReactCardFlip>
    </>
    );
}