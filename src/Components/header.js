import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import {Navbar, Container, Jumbotron } from 'react-bootstrap';
import rock from '../images/plrck.png';
import paper from '../images/paper.png';
import scissor from '../images/compsc.png';

export const Headers = () => {
    return(
        <div >
            <div >
            <Navbar bg="dark" variant="dark" >
            
                <Navbar.Brand >This is a simple rock-paper-scissor game</Navbar.Brand>
            
            </Navbar>
            </div>
        
        <div className='title'>
            <Container>
                <div align='center'>
                    <div className="item">
                        <img src={rock} width='100' height='100' alt='ROCK'
                             className='imgp'/>
                        <span className='font-weight-bold' >-</span>
                        <img src={paper} width='100' height='100' alt='PAPER' />
                        <span className='font-weight-bold' >-</span>
                        <img src={scissor} width='100' height='100' alt='SCISSOR'
                             className='imgc' />
                    </div>
                </div>
                <div align='center' className='title'>
                    <span className='head-title'> Rock - Paper - Scissors </span>
                </div>
            </Container>
        </div>
    </div>
    )
}
