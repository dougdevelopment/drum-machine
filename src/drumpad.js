import React from "react";
import DrumData from "./drums.json";
import "./volume.css";
import Toggle from "./toggle"
import video from "./assets/CROWD_JUMPS_LIGHTS_PULSE.mp4"


//Main Component
class DrumApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pressed:'None',
        on: true,
        immersive: "static",
      }
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.playAudio = this.playAudio.bind(this);
      this.updateVolume = this.updateVolume.bind(this);
      this.switchActive = this.switchActive.bind(this);
      this.immersive = this.immersive.bind(this);
    }

    immersive(){
        this.setState({
            immersive: this.state.immersive === "static" ? "immersive" : "static"
        })
        console.log("immersive");
    }

 updateVolume(event){
     
     let audio = document.getElementsByClassName("clip")
     console.log(audio);
     let volume = document.getElementById("volume").value / 10;
     audio.volume = volume;
     console.log(document.getElementsByClassName("clip").volume);
     for(let a = 0; a < DrumData.length; a++){
         document.getElementById(DrumData[a].letter).volume = volume;
     }
     this.setState({
         pressed: "Volume " + volume * 10,
     })
     console.log(document.getElementById(`#{DrumData[a].letter)}`.volume))
 }
    
  handleKeyPress (event) {
    // eslint-disable-next-line default-case
    
    if(this.state.on !== false){
        switch(event.key){
            case DrumData[0].letter : this.playAudio(DrumData[0].letter);
                 break;
            case DrumData[1].letter : this.playAudio(DrumData[1].letter);
                 break;
            case DrumData[2].letter : this.playAudio(DrumData[2].letter);
                 break;
            case DrumData[3].letter : this.playAudio(DrumData[3].letter);
                 break;
            case DrumData[4].letter : this.playAudio(DrumData[4].letter);
                 break;
            case DrumData[5].letter : this.playAudio(DrumData[5].letter);
                 break;
            case DrumData[6].letter : this.playAudio(DrumData[6].letter);
                 break;
            case DrumData[7].letter : this.playAudio(DrumData[7].letter);
                 break;
            case DrumData[8].letter : this.playAudio(DrumData[8].letter);
                 break;
            default: 
            break;
          }
    }
    
  }
  switchActive(){
    this.setState({
        on: !this.state.on,
    })
    console.log(!this.state.on)
  }
   
     playAudio(id){
         if(this.state.on !== false){
            document.getElementById(id).play();
            this.setState({
              pressed: id
            })
         }
    }
  
    componentDidMount() {
      console.log('mount')
      document.addEventListener('keypress', this.handleKeyPress)
   
    }  
    
    render() {
      return(
        <div id="container" className={this.state.immersive} onKeyDown={this.handleKeyPress} >
            
            <video autoPlay muted loop id="v-background" className={this.state.immersive}>
                <source src={video} type="video/mp4"/>   
            </video>

 
                  <header className="App-header">
                    <p>DRUM MACHINE</p>
                </header>
            <div id="display-container">

             <Display pressed={this.state.pressed} />
                    <div id='toggle-container'>
                        <div class="toggle-left">
                            <Toggle switchActive={this.switchActive}/>
                            <label>On | Off</label>
                        </div>
                        <div class="toggle-right">
                            <Toggle immersive={this.immersive}/>
                            <label>Immersive Mode</label>
                        </div>
                    </div>
                <div id="volume-control-container">
                    <input type="range" id="volume" name="volume" min="0" max="10" steps="10" onChange={this.updateVolume}></input>
                    <label for="volume">Volume</label>
                </div>
            </div>
          <div id="UI-container">
          <DrumUI drumArray={DrumData} playAudio={this.playAudio} vol={this.state.volume} />

          </div>
          <footer>
            <p>DOUGDEVELOPMENT</p>
        </footer>
        </div>
      )
    }
  }
    
    class Display extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return(
        <div id='display'>
          <h1>{this.props.pressed}</h1>
        </div>
      )
    }
   }
      
  class DrumUI extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div id="drum-machine">
          <ul>{DrumData.map((drumPad, Index) => {
            return (
              <li className='drum-pad' id={drumPad.id} onClick={() => this.props.playAudio(drumPad.letter)}>
                <h1>{drumPad.letter}</h1>
                <audio
                  className='clip' 
                  src={drumPad.audio}
                  id={drumPad.letter}>
                </audio>
              </li>
              );
            })}
          </ul>
        </div>
      )
    }
  }
      
export  default DrumApp; 
  