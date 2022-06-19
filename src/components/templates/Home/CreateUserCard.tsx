import { FC, FormEvent, useRef, useState } from 'react';
import store from 'store';
import { handleCreateUser } from 'store/actions';
import { handleNumberOnly } from 'utils/helpers';
import { Button, Card, Input } from '../Common';
import { ISingleUser } from './Users';

export const CreateUserCard: FC = () => {
	const [msg, setMsg] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const payload = {
			name: formData.get('name'),
			phone: formData.get('phone'),
			email: formData.get('email'),
		} as ISingleUser;

		if (Object.values((e) => e)) {
			store.dispatch(handleCreateUser(payload));
			setMsg(true);
			formRef.current.reset();
			setTimeout(() => setMsg(false), 3000);
		}
	};
	return (
		<Card style={{ width: '20rem', margin: '2rem auto' }}>
			<form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
				<Input label="Name" name="name" placeholder="Enter Name" type="text" required />
				<Input
					label="Phone"
					name="phone"
					placeholder="Enter Phone"
					type="text"
					onKeyDown={handleNumberOnly}
					required
				/>
				<Input label="Email" name="email" placeholder="Enter Email" type="email" required />
				<Button type="submit" variant="green" style={{ display: 'block', width: '100%' }}>
					Create User
				</Button>
			</form>
			{msg && <p style={{ color: 'var(--green)', textAlign: 'center' }}>Created Successfully!</p>}
		</Card>
	);
};
