import React, { Component } from 'react';
import reactDOM from 'react-dom';
import GameBoard from './containers/GameBoard/GameBoard.jsx';
import GamePieces from './containers/GamePieces/GamePieces.jsx';
import './index.scss';

class App extends Component {
    render() {
        return (
            <div>
                <h1 className="title">blahkus</h1> 
                <GameBoard />
                <GamePieces />
            </div>
        )
    }
}

reactDOM.render(<App />, document.getElementById('app'));
