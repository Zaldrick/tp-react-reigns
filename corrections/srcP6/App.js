import React, { Component } from 'react';
import './App.css';
import Power from './Power.js'
import Display from './Display.js';
import Choice from './Choice.js';
import CARDS from './assets/cards.json';

import bonheur from './assets/smile.png';
import resultats from './assets/graduation-cap.png';
import popularite from './assets/star.png';
import energie  from './assets/bed.png';

import fond from './assets/fond.png';

const styleApp = {
    backgroundImage: "url("+fond+")",
};
class App extends Component {
    constructor(props) {
        super(props);
        this.makeChoice = this.makeChoice.bind(this);
        this.moveImage = this.moveImage.bind(this);
        this.state = {
            jour: 1,
            annee: 2018,
            energie:50,
            resultats:50,
            popularite:50,
            bonheur:50,
            carteSelectionnee:1,
            degreeRotationImage:0,
            nextEnergie:0,
            nextResultats:0,
            nextPopularite:0,
            nextBonheur:0
        };
    };

    makeChoice(results) {
        if (this.state.carteSelectionnee>90){
            this.setState((prevState, props) => ({
                energie:50,
                resultats:50,
                popularite:50,
                bonheur:50,
                jour:0,
                carteSelectionnee: 0,
                annee:prevState.annee+1
            }));
        }else
            this.setState((prevState, props) => ({
                jour:prevState.jour+1,
                energie:prevState.energie+results.energie>100?100:prevState.energie+results.energie<=0?0:prevState.energie+results.energie,
                resultats:prevState.resultats+results.resultats>100?100:prevState.resultats+results.resultats<=0?0:prevState.resultats+results.resultats,
                popularite:prevState.popularite+results.popularite>100?100:prevState.popularite+results.popularite<=0?0:prevState.popularite+results.popularite,
                bonheur:prevState.bonheur+results.bonheur>100?100:prevState.bonheur+results.bonheur<=0?0:prevState.bonheur+results.bonheur,
                carteSelectionnee:   prevState.energie+results.energie>=100?90:prevState.energie+results.energie<=0?91:
                    prevState.resultats+results.resultats>=100?92:prevState.resultats+results.resultats<=0?93:
                        prevState.popularite+results.popularite>=100?94:prevState.popularite+results.popularite<=0?95:
                            prevState.bonheur+results.bonheur>=100?96:prevState.bonheur+results.bonheur<=0?97:
                            this.state.jour>=30?99:Math.floor(Math.random()*19)+1
            }));
    }

    moveImage(choice){
        if(choice===0){
            this.setState({ degreeRotationImage:0,
                            nextEnergie:0,
                            nextResultats:0,
                            nextPopularite:0,
                            nextBonheur:0
            });
        }else{
            this.setState({ degreeRotationImage:choice.slide,
                            nextEnergie:choice.results.energie,
                            nextResultats:choice.results.resultats,
                            nextPopularite:choice.results.popularite,
                            nextBonheur:choice.results.bonheur
            });
        }
    }
    render() {
        return (
            <div className="App" style={styleApp}>
                <Choice choice={CARDS[this.state.carteSelectionnee].left} clickHandler={this.makeChoice} mouseHandler={this.moveImage}/>
                <div className='displayColumn'>
                    <div className='powersRow colorRow '>
                        <Power powerValue={this.state.energie} powerImage={energie} nextPowerValue={this.state.nextEnergie}/>
                        <Power powerValue={this.state.resultats} powerImage={resultats} nextPowerValue={this.state.nextResultats}/>
                        <Power powerValue={this.state.popularite} powerImage={popularite} nextPowerValue={this.state.nextPopularite}/>
                        <Power powerValue={this.state.bonheur} powerImage={bonheur} nextPowerValue={this.state.nextBonheur}/>
                    </div>
                    <Display display={CARDS[this.state.carteSelectionnee].display} degree={this.state.degreeRotationImage}/>
                    <div className='footerRow colorRow'>
                        <div className='footerColumn'>Élève: {this.props.name}</div>
                        <div className='footerColumn'>Jour : {this.state.jour}</div>
                        <div className='footerColumn'>Année : {this.state.annee}-{this.state.annee+1}</div>
                    </div>
                </div>
                <Choice choice={CARDS[this.state.carteSelectionnee].right} clickHandler={this.makeChoice} mouseHandler={this.moveImage}/>
            </div>
        );
    }
}
export default App;
