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
import HighSchool from '../highSchool/HighSchool';
import University from '../university/University';
import HelpDesk from '../helpDesk/HelpDesk';
import Comversum from '../comversum/Comversum';
import Leftor from '../leftor/Leftor';
import Ideaology from '../ideaology/Ideaology';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomTimeline() {
  const [page, setPage] = useState<String>();
  const classes = useStyles();


  useEffect(() => {
    setPage('home');
  }, []);


  const project = () => {
    switch(page) {

      case "home":   return (<>
        <Timeline align="alternate">
      
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
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent >
            <button className="resumeTab" name="highSchool" onClick={(e) => handlePage(e)}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Mechanical Hight School
              </Typography>
              <Typography>Mixed Hight School, Banovići, Bosnia and Herzegovina</Typography>
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
              Aug 2020 - Nov 2020
            </Typography>
          </TimelineOppositeContent>
    
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <CodeIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
    
          <TimelineContent>
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
              May 2021 - Now
            </Typography>
          </TimelineOppositeContent>
    
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <CodeIcon />
            </TimelineDot>
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
      </Timeline>
      </>);
      case "highSchool":   return <HighSchool />;
      case "university": return <University />;
      case "helpDesk":  return <HelpDesk />;
      case "comversum":  return <Comversum />;
      case "leftor":  return <Leftor />;
      case "ideaology":  return <Ideaology />;
      default:      
        return <h1>No project match</h1>
    }
  }


  const handlePage = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    setPage(e.currentTarget.name);
  }

  return (
    <div>{ project() }</div>
  );
}