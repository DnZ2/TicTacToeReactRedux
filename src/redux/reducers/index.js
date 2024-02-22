import { combineReducers } from 'redux';
import { field } from './field';
import { endgame } from './endgame';
import { draw } from './draw';
import { currentPlayer } from './currentPlayer';

export default combineReducers({
	currentPlayer,
	field,
	draw,
	endgame,
});
