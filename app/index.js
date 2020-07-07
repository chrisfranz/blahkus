import React, { Component } from 'react';
import reactDOM from 'react-dom';
import GameBoard from './containers/GameBoard/GameBoard.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <div>Hello World!</div> 
                <GameBoard />
            </div>
        )
    }
}

reactDOM.render(<App />, document.getElementById('app'));
