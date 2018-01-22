import React, { Component } from 'react';
import { Button, Glyphicon, Nav, NavItem, Navbar, NavDropdown, MenuItem } from 'react-bootstrap';

import Dashboard from './dashboard';

class HeaderBar extends Component{
    constructor(props){
        super(props);        
        this.state = {isToggleOn: true};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
        
    }
    render(){        
        return (
            <div>
            <div className="headerBar col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <Navbar collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#home">React-Bootstrap</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/" onClick={this.handleClick}>
                            <Glyphicon glyph="align-justify" />
                        </NavItem>
                        <NavItem eventKey={1} href="#">
                            Dashboard
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link
                        </NavItem>
                        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}>Action</MenuItem>
                            <MenuItem eventKey={3.2}>Another action</MenuItem>
                            <MenuItem eventKey={3.3}>Something else here</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.4}>Separated link</MenuItem>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Link Right
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link Right
                        </NavItem>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
            </div>
        )
    }
    
}

export default HeaderBar;