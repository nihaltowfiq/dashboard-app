import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

export const Button: FC<PropsType> = (props) => {
	const { children, isOutline, className, variant, style, ...rest } = props;

	const noneOutlineStyle = {
		backgroundColor: `var(--${variant})`,
		color: 'var(--white)',
	};
	const outlineStyle = {
		backgroundColor: 'var(--white)',
		color: `var(--${variant})`,
		borderColor: `var(--${variant})`,
	};
	const finalStyle = isOutline ? outlineStyle : noneOutlineStyle;
	const styleProps = { ...finalStyle, ...style };

	return (
		<button className={`${styles.button} ${className}`} style={styleProps} {...rest}>
			{children}
		</button>
	);
};

Button.defaultProps = {
	isOutline: false,
	variant: 'blue',
};

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
	isOutline?: boolean;
	variant?: 'green' | 'blue' | 'red' | 'yellow' | 'black';
}
