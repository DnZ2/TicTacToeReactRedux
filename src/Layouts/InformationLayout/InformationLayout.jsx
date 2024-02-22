import React from 'react';
import styles from './InformationLayout.module.css'
import PropTypes from 'prop-types';


export function InformationLayout({children, restart}) {

	InformationLayout.propTypes={
		children: PropTypes.string,
		restart: PropTypes.func
	}

	return (
		<div className={styles.header}>
			<p className={styles.fontsize}>{children}</p>
			<button className={styles.restart} onClick={restart}>Начать заново</button>
		</div>

	);
}
