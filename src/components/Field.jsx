import React, { useEffect } from "react";
import { FieldLayout } from "../Layouts/FieldLayout/FieldLayout";
import { WIN_PATTERNS } from "../constants";
import { move, playerMove, setDraw, finishGame} from "../redux/actions";
import { useDispatch, useSelector } from 'react-redux'
import { selectGlobalState } from "../redux/selectors";
export function Field(){
	const { field, currentPlayer, endgame } = useSelector(selectGlobalState)
	const dispatch = useDispatch()

	useEffect(()=>{
		if(!field.some((element)=>element==='')){
			dispatch(setDraw())
		}
		WIN_PATTERNS.forEach((wins)=>{
			if(wins.every((winPosition)=>field[winPosition]==='X')){
				dispatch(playerMove('X'))
				dispatch(finishGame())
			}
			if(wins.every((winPosition)=>field[winPosition]==='O')){
				dispatch(playerMove('O'))
				dispatch(finishGame())
			}
	})
	},[currentPlayer, field])

	function click(i){
		XsAndOs('X', 'O', i) // ход X и переход хода к O
		XsAndOs('O', 'X', i) // ход O и переход хода к X
	}

	function XsAndOs(value, newValue, index){
		if(!endgame){
			if(currentPlayer===value && field[index]!=='O' && field[index]!=='X'){
				dispatch(move(index, value))
				dispatch(playerMove(newValue)) // Изменение массива, и смена игрока
			}
		}
	}

	return(
		<FieldLayout field={field} click={click}/>
	)
}
