import { Card, CreateUserCard, Input, UsersTable } from 'components/templates';
import { useIsomorphicLayoutEffect } from 'libs/hooks';
import { FC, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from 'store';
import { fetchAllData, filterByName, getDataState } from 'store/actions';

export const Home: FC = () => {
	const { isDataGetted } = useSelector(getDataState);
	const dispatch = useDispatch();

	useIsomorphicLayoutEffect(() => {
		if (!isDataGetted) store.dispatch(fetchAllData());
	}, [isDataGetted]);

	return (
		<Fragment>
			<CreateUserCard />

			<Card>
				<Input
					srOnly
					type="text"
					placeholder="Search by Name"
					style={{ width: '30%', marginBottom: 0 }}
					onChange={(e) => dispatch(filterByName(e.target.value))}
				/>
			</Card>
			<UsersTable />
		</Fragment>
	);
};
