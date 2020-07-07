import React, { Component } from 'react';
import { BOARD_SIZE } from '../../constants/constants.js';
import GameSquare from '../GameBoard/GameBoard.jsx';

class GameBoard extends Component {
    render() {
        // const boardRow = Array(BOARD_SIZE).fill(<div>X</div>);
        // console.log('BOARD ROW: ', boardRow)

        return <GameSquare />
    }
}

export default GameBoard;