import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import styles from './Input.module.scss';

export const Input: FC<InputProps> = (props) => {
	const { label, srOnly, message, style, required, ...rest } = props;
	const groupProps = { style };
	const labelProps = { required, children: label };
	const controlProps = { required, ...rest };

	return (
		<div className={styles.input_group} {...groupProps}>
			{!srOnly && <label className={styles.input_label} {...labelProps} />}
			<input className={styles.input_field} {...controlProps} />
		</div>
	);
};

export interface InputProps
	extends InputHTMLAttributes<HTMLInputElement>,
		Pick<TextareaHTMLAttributes<HTMLTextAreaElement>, 'cols' | 'rows'> {
	label?: string;
	srOnly?: boolean;
}

Input.defaultProps = {
	srOnly: false,
};
