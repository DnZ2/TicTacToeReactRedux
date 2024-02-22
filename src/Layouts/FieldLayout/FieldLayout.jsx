import React from 'react';
import styles from './FieldLayout.module.css'
import PropTypes from 'prop-types';

export function FieldLayout({field, click}) {
	FieldLayout.propTypes={
		field: PropTypes.array,
		click: PropTypes.func
	}
		return (
			<div id='cells' className={styles.grid} >
				{field.map((btn,index)=><button key={index} className={styles.cell} onClick={()=>{click(index)}}>{btn}</button>)}
			</div>
		);


}
