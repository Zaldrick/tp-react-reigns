import React from 'react';

class Choice extends React.Component {
    render() {
        return (
            <div className="choiceColumn" onClick={() => this.props.clickHandler()}>
                <div className="textChoice">{this.props.choice.description}</div>
            </div>
        );
    }
}
export default Choice;