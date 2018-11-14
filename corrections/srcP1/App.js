import React, { Component } from 'react';
import './App.css';

import CARDS from './assets/cards.json';

import fond from './assets/fond.png';
import bonheur from './assets/smile.png';
import resultats from './assets/graduation-cap.png';
import popularite from './assets/star.png';
import energie  from './assets/bed.png';

const styleApp = {
    backgroundImage: "url("+fond+")",
};
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jour: 1,
            annee: 2018
        };
    };

    render() {
        return (
            <div className="App" style={styleApp}>
                <div className="choiceColumn"/>
                <div className='displayColumn'>
                    <div className='colorRow powersRow'/>
                    <div className='displayCenter'/>
                    <div className='colorRow footerRow'>
                        <div className='footerColumn'>Élève: {this.props.name}</div>
                        <div className='footerColumn'>Jour : {this.state.jour}</div>
                        <div className='footerColumn'>Année : {this.state.annee}-{this.state.annee+1}</div>
                    </div>
                </div>
                <div className="choiceColumn"/>
            </div>
        );
    }
}
export default App;
