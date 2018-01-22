import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

import Dashboard from './dashboard';
import Setting from './setting';


class SideMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: true,
            backdrop: false
        };
    }
    
    render(){        
        return (
            <div>
            <div className="sideBarLeft">
                <ListGroup>
                    <ListGroupItem href="/">
                        Dashboard
                    </ListGroupItem>
                    <ListGroupItem href="/setting">Setting</ListGroupItem>
                    <ListGroupItem href="#">
                        Link 3
                    </ListGroupItem>
                </ListGroup>
            </div>
             
           </div>
        )
    }
    
}

export default SideMenu;