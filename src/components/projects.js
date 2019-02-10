import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

export default class Projects extends Component {
  state = {
    activeTab: 0,
  }

  toggleCategories = () => {
    switch(this.state.activeTab)
    {
      case 0:
        return(
          <div className="projects-grid">
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*Qc0XxYm-qAZL-7tjjlNfrg.png) center / cover'}}>
            Ruby Project #1
            </CardTitle>
            <CardText>
            Lorizzle gangsta dolizzle sit amizzle, fo shizzle adipiscing boofron.Nullam dawg velizzle, dizzle volutpat, get down get down quizzle ...
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*Qc0XxYm-qAZL-7tjjlNfrg.png) center / cover'}}>
            Ruby Project #2
            </CardTitle>
            <CardText>
            Lorizzle gangsta dolizzle sit amizzle, fo shizzle adipiscing boofron.Nullam dawg velizzle, dizzle volutpat, get down get down quizzle ...
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> 
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*Qc0XxYm-qAZL-7tjjlNfrg.png) center / cover'}}>
            Ruby Project #3
            </CardTitle>
            <CardText>
            Lorizzle gangsta dolizzle sit amizzle, fo shizzle adipiscing boofron.Nullam dawg velizzle, dizzle volutpat, get down get down quizzle ...
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> 
         </div>
        )
      case 1:
        return(
         <div className="projects-grid">
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.python.org/static/opengraph-icon-200x200.png) center / cover'}}>
            Python Project #1
            </CardTitle>
            <CardText>
            Lorizzle gangsta dolizzle sit amizzle, fo shizzle adipiscing boofron.Nullam dawg velizzle, dizzle volutpat, get down get down quizzle ...
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.python.org/static/opengraph-icon-200x200.png) center / cover'}}>
            Python Project #2
            </CardTitle>
            <CardText>
            Lorizzle gangsta dolizzle sit amizzle, fo shizzle adipiscing boofron.Nullam dawg velizzle, dizzle volutpat, get down get down quizzle ...
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> 
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.python.org/static/opengraph-icon-200x200.png) center / cover'}}>
            Python Project #3
            </CardTitle>
            <CardText>
            Lorizzle gangsta dolizzle sit amizzle, fo shizzle adipiscing boofron.Nullam dawg velizzle, dizzle volutpat, get down get down quizzle ...
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> 
         </div>
        )
      case 2:
        return(
          <div className="projects-grid">
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png) center / cover'}}>
            Javascript Project #1
            </CardTitle>
            <CardText>
            Lorizzle gangsta dolizzle sit amizzle, fo shizzle adipiscing boofron.Nullam dawg velizzle, dizzle volutpat, get down get down quizzle ...
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png) center / cover'}}>
            Javascript Project #2
            </CardTitle>
            <CardText>
            Lorizzle gangsta dolizzle sit amizzle, fo shizzle adipiscing boofron.Nullam dawg velizzle, dizzle volutpat, get down get down quizzle ...
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> 
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png) center / cover'}}>
            Javascript Project #3
            </CardTitle>
            <CardText>
            Lorizzle gangsta dolizzle sit amizzle, fo shizzle adipiscing boofron.Nullam dawg velizzle, dizzle volutpat, get down get down quizzle ...
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>Live</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card> 
         </div> 
        )
      default:
        return (
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px'}}>
              Not Found
            </CardTitle>
          </Card>
        )
    }
  }
 

  render() {
    return (
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
          <Tab>Ruby </Tab>
          <Tab>Python</Tab>
          <Tab>Javascript</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">
                {this.toggleCategories()}
              </div>
            </Cell>
          </Grid>
      </div>
    ) 
  }
}
