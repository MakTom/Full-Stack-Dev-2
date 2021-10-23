import React from "react";

export default class toggleButton extends React.Component {
    constructor(props) {
        console.log("Inside Constructor");
        super(props);
        this.state = { pressed : false };
    }

    render() {
        return React.createElement('button', {
            onClick: () => this.setState({
                pressed: !this.state.pressed
            })
        }, this.state.pressed ? 'pressed' : 'unpressed');
    }
}

ReactDOM.render(
    React.createElement(Hello),
    document.getElementById('root')
  );