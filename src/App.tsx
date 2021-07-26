import React, {useEffect} from 'react'
import './App.css';
import {Navbar} from './components/navbar/Navbar';
import {BrowserRouter as Router, Switch, Route, HashRouter} from 'react-router-dom'
import {Resume} from './pages/resume/Resume'
import {Projects} from './pages/projects/Projects'
import {Landing} from './pages/landing/Landing'
import {AboutMe} from './pages/aboutme/AboutMe'
import {ContactMe} from './pages/contactme/ContactMe'
import {ParticlesBG} from './components/particles/ParticlesBG'
import Aos from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect (() => {
    Aos.init({disable: 'mobile'})
    Aos.refresh();
}, []);

  return (
    <>
      <ParticlesBG />

      <div className="App">
        <HashRouter >
        {/* <Router basename="/"> */}
          <Navbar />
          {/* <Switch> */}
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/resume" component={Resume}>
              {/* <Resume /> */}
            </Route>
            <Route path="/projects" component={Projects}>
              {/* <Projects /> */}
            </Route>
            <Route path="/aboutme" component={AboutMe}>
              {/* <AboutMe /> */}
            </Route>
            <Route path="/contactme" component={ContactMe}>
              {/* <ContactMe /> */}
            </Route>
          {/* </Switch>
        </Router> */}
        </HashRouter >

      </div>
    </>
  );
}

export default App;
