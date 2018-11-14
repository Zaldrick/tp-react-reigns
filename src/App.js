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
    };

    render() {
        return (
            <div className="App" style={styleApp}>
                <div className="choiceColumn"/>
                <div className='displayColumn'>
                    <div className='colorRow powersRow'/>
                    <div className='displayCenter'/>
                    <div className='colorRow footerRow'/>
                </div>
                <div className="choiceColumn"/>
            </div>
        );
    }
}
export default App;
