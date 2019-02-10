import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

export default class Resume extends Component {
  render() {
    return (
      <div>
       <Grid>
         <Cell col={4}>
          <div style={{textAlign: 'center'}}>
          <img 
            src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
            alt="avatar"
            style={{height: '200px'}}
            />
          </div>
          <h2 style={{paddingTop: '2em'}}>Justin Ndwiga</h2>
          <h4 style={{color: 'grey'}}>Software Developer</h4>
          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          <p>Dizzle ut pizzle. Fusce magna ligula, dignissim sit amet, fringilla egizzle, black nizzle, tortor. Owned a nisi. Crackalackin malesuada neque izzle risus. Suspendisse dawg</p>
          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          <h5>Address</h5>
          <p>1 Hacker Way Menlo PArk, 94025</p>
          <h5>Phone</h5>
          <p>(254) 123456789</p>
          <h5>Email</h5>
          <p>someone@example.com</p>
          <h5>Website</h5>
          <p>myswebsite.com</p>
          <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
         </Cell>
         <Cell col={8} className="resume-right-col">
          <h2>Education</h2>

          <Education
            startYear={2010}
            endYear={2014}
            schoolName="Hogwarts Tech"
            schoolDescription="Nunc tellizzle its fo rizzle, shut the shizzle up izzle, bling bling black, bling bling izzle, dizzle. Etizzle mofo leo a sem hendrerit mattizzle. Pellentesque interdum rizzle gangster erizzle commodo ullamcorper"
          />
          <Education
            startYear={2006}
            endYear={2009}
            schoolName="School of HardKnocks"
            schoolDescription="Nunc tellizzle its fo rizzle, shut the shizzle up izzle, bling bling black, bling bling izzle, dizzle. Etizzle mofo leo a sem hendrerit mattizzle. Pellentesque interdum rizzle gangster erizzle commodo ullamcorper"
          />
          <hr style={{borderTop: '3px solid #e22947'}} />
          <h2>Experience</h2>

          <Experience 
            startYear={2015}
            endYear={2015}
            jobName="First Job"
            jobDescription="Integer nizzle for sure. Pot sempizzle, nulla sure vehicula congue, break yo neck, yall erat convallizzle brizzle, vizzle shizzle my nizzle crocodizzle sapizzle leo vizzle nulla"
          />
          <Experience 
            startYear={2015}
            endYear={2018}
            jobName="2nd Job"
            jobDescription="Integer nizzle for sure. Pot sempizzle, nulla sure vehicula congue, break yo neck, yall erat convallizzle brizzle, vizzle shizzle my nizzle crocodizzle sapizzle leo vizzle nulla"
          />
          <Experience 
            startYear={2018}
            endYear={Date}
            jobName="3rd Job"
            jobDescription="Integer nizzle for sure. Pot sempizzle, nulla sure vehicula congue, break yo neck, yall erat convallizzle brizzle, vizzle shizzle my nizzle crocodizzle sapizzle leo vizzle nulla"
          />
          <hr style={{borderTop: '3px solid #e22947'}} />
          <h2>Skills</h2>

          <Skills 
            skill="Javascript"
            progress={70}
          />
          <Skills 
            skill="React"
            progress={65}
          />
          <Skills 
            skill="Python"
            progress={85}
          />
          <Skills 
            skill="Flask"
            progress={90}
          />
          <Skills 
            skill="Django"
            progress={80}
          />
           <Skills 
            skill="Ruby"
            progress={80}
          />
           <Skills 
            skill="Ruby on Rails"
            progress={80}
          />
          <Skills 
            skill="HTML/CSS"
            progress={95}
          />
         </Cell>
       </Grid>
      </div>
    )
  }
}
