import React from 'react';
import { hidden } from 'ansi-colors';


class Announcements extends React.Component{

  render(){

    return (
      <div aria-atomic="true" style={{visible: hidden, height: 0}}>  
        {this.props.message}
      </div>
    );
  }
}

export default Announcements;
