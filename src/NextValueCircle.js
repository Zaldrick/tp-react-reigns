import React from 'react';

class NextValueCircle extends React.Component {
    render() {
        return (
            <div className="nextValueCircle" style={{height:this.props.sizeCircle>=15?20:this.props.sizeCircle>0?10:0,width:this.props.sizeCircle>=15?20:this.props.sizeCircle>0?10:0}}>
            </div>
        );
    }
}
export default NextValueCircle;
