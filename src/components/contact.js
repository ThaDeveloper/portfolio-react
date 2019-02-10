import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Justin Ndwiga</h2>
            <img 
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{height: '250px'}}
            />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Gangsta ipsizzle dolor sizzle amet, consectetuer adipiscing doggy. Nullizzle shit yo mamma, pot volutpizzle, suscipit its fo rizzle, its fo rizzle vizzle, arcu. Bizzle mah nizzle tortizzle. Sed erizzle</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton'}}>
                <i className="fa fa-phone-square" aria-hidden="true" />
                (254) 000000000
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton'}}>
                <i className="fa fa-envelope" aria-hidden="true" />
                myemail@gmail.com
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton'}}>
                <i className="fab fa-skype" aria-hidden="true" />
                Skype ID
                </ListItemContent>
              </ListItem>
            </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
} 
