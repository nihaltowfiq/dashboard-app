import { LoginForm } from 'components/templates';
import { FC, FormEvent, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { authSignIn } from 'store/actions';

export const Login: FC = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation() as unknown as LocationProps;

	const from = location?.state?.from?.pathname || '/';

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const username = formData.get('username') as string;
		if (username.length > 0) {
			dispatch(authSignIn(username));
			navigate(from, { replace: true });
		}
	};

	return (
		<Fragment>
			<p style={{ textAlign: 'center', fontWeight: '500' }}>You must log in to view the page at "{from}"</p>

			<LoginForm submitHandler={handleSubmit} />
		</Fragment>
	);
};

type LocationProps = {
	state: {
		from: Location;
	};
};
