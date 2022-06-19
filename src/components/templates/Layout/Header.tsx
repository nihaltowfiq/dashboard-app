import { FC, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { authSignOut, getUserState } from 'store/actions';
import { Button } from '../Common';
import styles from './Layout.module.scss';

export const Header: FC = () => {
	const { isAuthenticate, username } = useSelector(getUserState);
	const dispatch = useDispatch();

	return (
		<div className={styles.header}>
			<div className={styles.header_content}>
				<Link to="/">
					<h1>CRUD App</h1>
				</Link>
				<div>
					{isAuthenticate ? (
						<Fragment>
							<span>{username}</span>,{' '}
							<Button
								variant="black"
								style={{ padding: '0.45rem' }}
								onClick={() => dispatch(authSignOut())}
							>
								Logout
							</Button>
						</Fragment>
					) : (
						<Link to="/login">
							<p className="loginBtn">login</p>
						</Link>
					)}
				</div>
			</div>
		</div>
	);
};
