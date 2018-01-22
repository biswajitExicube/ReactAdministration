import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Navbar } from 'react-bootstrap';

import SideMenu from './sidemenu';
import HeaderBar from './headerbar';
import MainBody from './mainbody';

class SideBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: true,
            backdrop: false
        };
    }
    
    
    contentStyle() {
        return {
            marginLeft: this.state.isOpen && this.isDocked()
                ? '256px' : '0px',
            width: this.state.isOpen && this.isDocked()
            ? 'calc(100% - 256px)' : '100%',
            transition: '0.3s'
        }
    }
    
    isDocked() {
        return window.innerWidth > 500
    }
    
    toggle() {
        this.setState({isOpen: !this.state.isOpen})
    }
    
    render() {
        return (
            <div>
                <HeaderBar toggle={() => this.toggle()} />
                <div style={this.contentStyle()} className="mainBody">
                    <MainBody  />
                </div>
                <SideMenu 
                    isOpen={this.state.isOpen}
                    toggle={() => this.toggle()}
                    isDocked={this.isDocked()}
                />
                
            </div>
        )
    }
    /*render(){        
        return (
            <div className="sideBarLeft col-lg-3 col-md-3 col-sm-3 col-xs-3 ">
                <ListGroup>
                    <ListGroupItem href="#">
                        Link 1
                    </ListGroupItem>
                    <ListGroupItem href="#">Link 2</ListGroupItem>
                    <ListGroupItem href="#" disabled>
                        Link 3
                    </ListGroupItem>
                </ListGroup>;
            </div>
        )
    }*/
    
}

export default SideBar;