import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Breadcrumb } from 'react-bootstrap';

import Dashboard from './dashboard';

class MainBody extends Component{
    constructor(props){
        super(props);
        
    }
    render(){        
        return (
            <div className="mainBodyContent col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <Breadcrumb>
                <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item href="#" active>
                    Library
                </Breadcrumb.Item>                
            </Breadcrumb>
                <Dashboard />
            </div>
        )
    }
    
}

export default MainBody;