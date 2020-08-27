import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Jumbotron, Button } from 'react-bootstrap';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@material-ui/core';
import '../App.css';
import ym from '../images/yomo.png';
import compm from '../images/como.png';
import plrck from '../images/plrck.png';
import plppr from '../images/plppr.png';
import plsc from '../images/plsc.png';
import comprck from '../images/comprck.png';
import compppr from '../images/compppr.png';
import compsc from '../images/compsc.png';
import { tada } from 'react-animations';

 

class Game extends Component {
    constructor(props){
        super(props);
        this.state={
            disabled: true,
            value : 'Select Your Move',
            compMove: '',
            winner : '',
            como : '',
            pp : null,
            cp : null,
            pimg : ym,
            cimg : compm
            }
        this.handleChange=this.handleChange.bind(this)
        this.playGame=this.playGame.bind(this)

        
    }
    handleChange = (event) =>{
        this.setState({value : event.target.value, como : 'Select computer\'s move',})
          this.setState((state) => {
            return {disabled : false,pimg:ym,cimg:compm}
          });
        
        const moves = ['rock', 'paper', 'scissor']
        const cm = moves.sort(() => Math.random() - Math.random()).find(() => true);
        this.setState((state) => {
            return {compMove : cm, como : 'Select comp\'s Move'}
        });
        console.log('Player value hc func : ' + this.state.value)
        console.log('Computer value hc func : ' + this.state.compMove)  
    }

    imgSt = () => {
        switch(this.state.value){
            case 'rock':
                this.setState((state) => {
                    return {pp : plrck}
                  });
                  break;
            case 'paper':
                this.setState((state) => {
                    return {pp : plppr}
                });
                break;
            case 'scissor':
                this.setState((state) => {
                    return {pp : plsc}
                    });
                break;
        }
        switch(this.state.compMove){
            case 'rock':
                this.setState((state) => {
                    return {cp : comprck}
                });
                break;
            case 'paper':
                this.setState((state) => {
                    return {cp : compppr}
                });
                break;
            case 'scissor':
                this.setState((state) => {
                    return {cp : compsc}
                    });
                break;
        }
        this.setState((state) => {
            return {como : 'Click Play'}
          });
    }
        
    playGame = () => { 

        this.setState((state) => {
            return{como : this.state.compMove}
        })
        this.setState((state) => {
            return{pimg : this.state.pp}
        })
        this.setState((state) => {
            return{cimg : this.state.cp}
        })
        console.log('Player value pg func : ' + this.state.value)
        console.log('Computer value pg func : ' + this.state.compMove)  
        console.log('Player img pg func : ' + this.state.pp)
        console.log('Computer img pg func : ' + this.state.cp)
        if (this.state.value === this.state.compMove) {
            console.log("Match Tied");
            this.setState((state) => {
                return {winner : 'Match Tied'}
              });
        }
		if((this.state.value==="rock" && this.state.compMove==="scissor") ||
			(this.state.value==="paper" && this.state.compMove==="rock") ||
			(this.state.value==="scissor" && this.state.compMove==="paper")) {
                this.setState((state) => {
                    return {winner : 'You won'}
                  });
                console.log("You Won")
		}
        else if((this.state.value==="scissor" && this.state.compMove==="rock") ||
                (this.state.value==="rock" && this.state.compMove==="paper") ||
                (this.state.value==="paper" && this.state.compMove==="scissor")){
            this.setState((state) => {
                return {winner : 'Computer won'}
              });       
              console.log("Computer Won")
        }
	
    }  
    render(){
        return (
            <div>
                <Jumbotron fluid>
                    <div className='row'>
                        <div className='col-xs-6 col-md-6' align='center'>
                            <div>
                                <FormControl >
                                    <FormLabel  >Select your move</FormLabel>
                                    <RadioGroup row 
                                                aria-label="choice" 
                                                name={this.props.value}  
                                                value={this.state.value}                                   
                                                onChange={this.handleChange}>
                                        <FormControlLabel 
                                        value="rock" 
                                        control={<Radio />} 
                                        label="Rock"
                                        labelPlacement='top' />
                                        <FormControlLabel 
                                        value="paper" 
                                        control={<Radio />} 
                                        label="Paper" 
                                        labelPlacement='top'/>
                                        <FormControlLabel value="scissor" 
                                        control={<Radio />} 
                                        label="Scissor" 
                                        labelPlacement='top'/>
                                    </RadioGroup>
                                </FormControl>
                            </div>
                            <div align='center' className='title'>
                                    <Button variant="outline-primary" 
                                            color="primary" 
                                            disabled={this.state.disabled}   
                                            onClick={this.imgSt}>
                                        Select Comp's Move
                                    </Button>
                                </div>
                        </div>
                            <div className='col-xs-6 col-md-6' >
                                <div align='center'>
                                    
                                Your move = {this.state.value}
                                </div>
                                <div align='center'>
                                Comp's Move = {this.state.como}
                                </div>
                                <div align='center' className='title'>
                                    <Button variant="outline-primary" 
                                            color="primary" 
                                            disabled={this.state.disabled}   
                                            onClick={this.playGame}>
                                        Play
                                    </Button>
                                </div>
                                <div align='center' >
                                    <img src={this.state.pimg} 
                                         alt='Play' 
                                         width='100' 
                                         height='100'
                                         className='imgp'
                                         ></img>
                                    <span>xx</span>
                                    <img src={this.state.cimg} 
                                         alt='Play' 
                                         width='100' 
                                         height='100'
                                         className='imgc'></img>
                                </div>
                            <div align="center">
                                 <span className='winner'>{this.state.winner}</span>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        )
    }
    
}
export default Game;

