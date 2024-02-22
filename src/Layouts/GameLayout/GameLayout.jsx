import React from 'react';
import { Field } from '../../components/Field';
import { Information } from '../../components/Information';
import styles from './GameLayout.module.css'

export function GameLayout() {
	return (
			<div className={styles.game}>
			<Information />
			<Field />
			</div>
	);
}
