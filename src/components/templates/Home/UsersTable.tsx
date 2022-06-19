import { Spinner } from 'components/templates';
import { FC, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataState, sortedData } from 'store/actions';
import styles from './Home.module.scss';
const Users = lazy(() => import('./Users'));

export const UsersTable: FC = () => {
	const { data } = useSelector(getDataState);
	const dispatch = useDispatch();

	return (
		<div className={styles.wrapper}>
			<Suspense fallback={<Spinner />}>
				<table className={styles.table}>
					<thead className={styles.thead}>
						<tr>
							<th>S/N</th>
							<th style={{ cursor: 'pointer' }} onClick={() => dispatch(sortedData())}>
								ID ⇅
							</th>
							<th>Name</th>
							<th>Phone</th>
							<th>Email</th>
							<th>View</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody className={styles.tbody}>
						<Users data={data} />
					</tbody>
				</table>
			</Suspense>
		</div>
	);
};
