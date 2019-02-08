import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import AboutMe from './components/aboutme';
import Contact from './components/contact';
import Projects from './components/projects';
import Resume from './components/resume';

class App extends Component {
  render() {
    return (
    <div className="demo-big-content">
      <Layout fixedHeader>
          <Header title="Title" scroll>
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>  
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content >
            <div className="page-content" />
            <Main />
          </Content>
      </Layout>
  </div>
    );
  }
}

export default App;
 