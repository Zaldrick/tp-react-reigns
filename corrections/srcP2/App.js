import React, { Component } from 'react';
import './App.css';
import Power from './Power.js'

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
            annee: 2018,
            energie:50,
            resultats:50,
            popularite:50,
            bonheur:50,
        };
    };

    render() {
        return (
            <div className="App" style={styleApp}>
                <div className="choiceColumn"/>
                <div className='displayColumn'>
                    <div className='powersRow colorRow '>
                    <Power powerValue={this.state.energie} powerImage={energie}/>
                    <Power powerValue={this.state.resultats} powerImage={resultats}/>
                    <Power powerValue={this.state.popularite} powerImage={popularite}/>
                    <Power powerValue={this.state.bonheur} powerImage={bonheur}/>
                    </div>
                    <div className='displayCenter'/>
                    <div className='footerRow colorRow '>
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
