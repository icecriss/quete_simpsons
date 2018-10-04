// Working.js
import React, { Component } from 'react';

class Working extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pause: props.pause
        };
    }
    handleClick = () => {
        console.log(this.props);
        // Négation de la valeur actuelle, et affectation comme nouvelle valeur
        this.setState({ on: !this.state.on });


    };
    render() {
        const pause = this.state.on ? 'working' : 'on break';
        return (
            <div className="Lamp">
                <button
                    className={pause}
                    onClick={
                        this.handleClick
                    }
                >{pause.toUpperCase()}</button>
            </div>
        );
    }
}

export default Working;