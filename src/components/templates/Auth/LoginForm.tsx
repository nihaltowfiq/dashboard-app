import { FC, FormEvent } from 'react';
import { Button, Card, Input } from '../Common';

export const LoginForm: FC<PropsType> = ({ submitHandler }) => {
	return (
		<Card style={{ width: '20rem', margin: 'auto' }}>
			<form onSubmit={submitHandler}>
				<Input label="Username" placeholder="Type anything" name="username" type="text" />
				<Button type="submit" style={{ display: 'block', width: '100%' }}>
					Login
				</Button>
			</form>
		</Card>
	);
};

interface PropsType {
	submitHandler: (e: FormEvent<HTMLFormElement>) => void;
}
