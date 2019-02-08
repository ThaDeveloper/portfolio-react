import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl';

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img 
              src='https://cdn1.iconfinder.com/data/icons/ninja-things-1/720/ninja-background-512.png'
              alt="Avatar"
              className="avatar-img"
            />
            <div className="banner-text">
              <h1>Whatever Floats Your Boat</h1>
              <hr/>
              <p>
                Ruby | Python | Django | Flask | Javascript | React
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-linkedin"naria-hidden="true" />
                </a>
                {/* Github */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-github-square" aria-hidden="true" />
                </a>
                {/* Google */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-google-plus-square" aria-hidden="true" />
                </a>
                {/* Twitter */}
                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                <i className="fab fa-twitter-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid> 
      </div>
    )
  }
}
