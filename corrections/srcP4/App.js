import React, { Component } from 'react';
import './App.css';
import Power from './Power.js'
import Display from './Display.js';
import Choice from './Choice.js';
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
        this.makeChoice = this.makeChoice.bind(this);
        this.state = {
            jour: 1,
            annee: 2018,
            energie:50,
            resultats:50,
            popularite:50,
            bonheur:50,
            carteSelectionnee:1
        };
    };

    makeChoice() {
        this.setState((prevState) => ({
                jour: prevState.jour+1,
                carteSelectionnee: prevState.carteSelectionnee+1
            }));
    }


    render() {
        return (
            <div className="App" style={styleApp}>
                <Choice choice={CARDS[this.state.carteSelectionnee].left} clickHandler={this.makeChoice}/>
                <div className='displayColumn'>
                    <div className='powersRow colorRow '>
                    <Power powerValue={this.state.energie} powerImage={energie}/>
                    <Power powerValue={this.state.resultats} powerImage={resultats}/>
                    <Power powerValue={this.state.popularite} powerImage={popularite}/>
                    <Power powerValue={this.state.bonheur} powerImage={bonheur}/>
                    </div>
                    <Display display={CARDS[this.state.carteSelectionnee].display}/>
                    <div className='footerRow colorRow'>
                        <div className='footerColumn'>Élève: {this.props.name}</div>
                        <div className='footerColumn'>Jour : {this.state.jour}</div>
                        <div className='footerColumn'>Année : {this.state.annee}-{this.state.annee+1}</div>
                    </div>
                </div>
                <Choice choice={CARDS[this.state.carteSelectionnee].right} clickHandler={this.makeChoice}/>
            </div>
        );
    }
}
export default App;
