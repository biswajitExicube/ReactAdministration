import React from 'react';
import { Button } from 'react-bootstrap';
import SideBar from './components/sidebar';
/**
 * A counter button: tap the button to increase the count.
 */
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
 
  render() {
    return (
        <div>
            
            <SideBar />
    </div>
    );
  }
}
export default App;