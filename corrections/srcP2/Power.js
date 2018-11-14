import React from 'react';
import NextCircleValue from './NextValueCircle';

class Power extends React.Component {
    render() {
        return (
            <div className='powerColumn'>
                <div className="nextStatHeader">
                </div>
                <div className="fillFront" ><div className="fillBack" style={{height:(100-this.props.powerValue)/10+'vh'}}><img className="powerIcone" src={this.props.powerImage}/></div></div>
            </div>
        );
    }
}
export default Power;