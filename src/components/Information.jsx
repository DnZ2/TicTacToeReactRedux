import React from "react";
import { InformationLayout } from "../Layouts/InformationLayout/InformationLayout";
import { reset } from "../redux/actions";
import { useDispatch, useSelector } from 'react-redux'
import { selectGlobalState } from "../redux/selectors";

export function Information(children){
	const {draw, endgame, currentPlayer} = useSelector(selectGlobalState)
	const dispatch = useDispatch()
	function restart(){
		dispatch(reset())
	}

	if(draw){
		children = 'Ничья'
	}
	else{
		if(endgame){
			children = `Победа: ${currentPlayer}`
		}
		else{
			children = `Ходит: ${currentPlayer}`
		}
	}
	return(
		<InformationLayout children={children} restart={restart}/>
	)
}
