import React from 'react';
import { visible, hidden } from 'ansi-colors';


class Announcements extends React.Component{

  render(){

    return (
      <div aria-live="polite" aria-atomic="true" style={{visible: hidden, height: 0}}>  
        {this.props.message}
      </div>
    );
  }
}

export default Announcements;