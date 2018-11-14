import React from 'react';
import logoLille from './assets/logoLilleMosaic.png';

const importAll = require =>
    require.keys().reduce((acc, next) => {
        acc[next.replace("./", "").replace(/\.[^/.]+$/, "")] = require(next);
        return acc;
    }, {});

const images = importAll(
    require.context("./cardImages", false, /\.(png|jpe?g|svg)$/)
);

const backDisplay = {
    backgroundImage: "url("+logoLille+")"
};


class Display extends React.Component {
    constructor(props) {
        super(props);
        this.updateCardMove = this.updateCardMove.bind(this);
        this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
        this.state={
            move:'0%',
            rotation:'rotate(0deg)',
        }
    }
    componentWillReceiveProps(nextProps) {
        if(this.props.degree !== nextProps.degree )
        {this.updateCardMove(nextProps.degree);}
    }

    updateCardMove(transformValue) {
        if(transformValue!==0){
            this.setState({move:transformValue+'%', rotation:'rotate('+transformValue/2+'deg)' });
        }else{
            this.setState({move:0,rotation:'rotate(0deg)' });
        }
    }

    render() {
        return (<div className='displayCenter'>
                <h3>{this.props.display.description}</h3>
                <div className='behindDisplayImage' style={backDisplay}><img className="displayImage" src={images[this.props.display.id]} style={{left:this.state.move , transform: this.state.rotation}}/></div>
                <h2>{this.props.display.personnage}</h2>
            </div>

        );
    }
}
export default Display;
