import { FC, HTMLAttributes } from 'react';
import styles from './Card.module.scss';

export const Card: FC<HTMLAttributes<HTMLElement>> = ({ children, className, ...rest }) => (
	<div className={`${styles.card} ${className ? className : ''}`} {...rest}>
		{children}
	</div>
);
