import spinner from 'assets/images/spinner.gif';
import { FC } from 'react';

export const Spinner: FC = () => (
	<img src={spinner} alt="Loading..." style={{ width: '80px', display: 'block', margin: 'auto' }} />
);
