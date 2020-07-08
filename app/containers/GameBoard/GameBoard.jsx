import React, { Component } from 'react';
import './GameBoard.scss';
import { BOARD_SIZE } from '../../constants/constants.js';
import GameSquare from '../GameBoard/GameBoard.jsx';

class GameBoard extends Component {
    render() {
        const boardSquare = <div className="boardSqaure">X</div>
        const boardRow = <div className="boardRow"> {Array(BOARD_SIZE).fill(boardSquare)} </div>
        const gameBoard = Array(BOARD_SIZE).fill(boardRow)

        return (
            <div>
                {gameBoard}
            </div>
        )
    }
}

export default GameBoard;