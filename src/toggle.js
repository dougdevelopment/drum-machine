import React from 'react'
import "./toggle.css"

class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          toggle: false
      }
      this.toggleClick = this.toggleClick.bind(this);
    }

    toggleClick(){
        this.setState({
            toggle: !this.state.toggle
        })
        if(typeof this.props.switchActive === "function"){
            this.props?.switchActive();
        }
        if(typeof this.props.immersive === "function"){
            this.props?.immersive();
        }
        
    }
    render() {
      return(
            <div id='toggle' className={this.state.toggle ? "on" : ""}>
                <div id='thumb' onClick={this.toggleClick}>
                </div>
            </div>
            
      )
    }
   }

   export default Toggle
