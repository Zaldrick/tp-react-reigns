import React from 'react';

class Choice extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.state = { isMouseOver : false }
    }
    handleMouseOut(event) {
        this.setState({isMouseOver :false});
        this.props.mouseHandler(0);
    }

    handleMouseOver(event) {
        this.setState({isMouseOver :true});
        this.props.mouseHandler(this.props.choice);
    }

    render() {
        return (
            <div className="choiceColumn" onClick={() => this.props.clickHandler(this.props.choice.results)}  onMouseLeave={this.handleMouseOut} onMouseEnter={this.handleMouseOver}>
                {this.state.isMouseOver? <div className="textChoice">{this.props.choice.description}</div>:null}
            </div>
        );
    }
}
export default Choice;