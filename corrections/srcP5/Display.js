import React from 'react';

const importAll = require =>
    require.keys().reduce((acc, next) => {
        acc[next.replace("./", "").replace(/\.[^/.]+$/, "")] = require(next);
        return acc;
    }, {});

const images = importAll(
    require.context("./cardImages", false, /\.(png|jpe?g|svg)$/)
);

class Display extends React.Component {
    render() {
        return (<div className='displayCenter'>
                <h1>{this.props.display.description}</h1>
                <img className="displayImage" src={images[this.props.display.id]}/>
                <h3>{this.props.display.personnage}</h3>
            </div>

        );
    }
}
export default Display;