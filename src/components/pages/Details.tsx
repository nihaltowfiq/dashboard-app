import { Card } from 'components/templates';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDataState } from 'store/actions';

export const Details: FC = () => {
	const params = useParams();
	const { users } = useSelector(getDataState);
	const user = users.find(({ id }) => id === Number(params?.id));

	if (user && Object.values(user).length > 0) {
		const { id, name, phone, email } = user;

		return (
			<Card style={{ width: '20rem', margin: '2rem auto' }}>
				<p className="fw-bold">USER DETAILS</p>
				<p>ID: {id}</p>
				<p>Name: {name}</p>
				<p>Phone: {phone}</p>
				<p>Email: {email}</p>
			</Card>
		);
	}
	return <p style={{ margin: '2rem 0', textAlign: 'center', color: 'var(--yellow)' }}>No Data Found!</p>;
};
