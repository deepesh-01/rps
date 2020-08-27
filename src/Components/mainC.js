import React , { Component } from 'react';
import {Headers} from './header';
import Game from './game'



class Main extends Component {
    render(){
        return(
            <div>
                <Headers />
                <Game />
            </div>
        )
    }
    
}

export default Main;