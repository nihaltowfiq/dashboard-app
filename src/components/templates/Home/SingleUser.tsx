import { IDataType } from 'libs/api/interfaces';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import store from 'store';
import { handleDeleteSingleUser, handleUpdateSingleUser } from 'store/actions';
import { handleNumberOnly } from 'utils/helpers';
import { Button, Input } from '../Common';
import styles from './Home.module.scss';
import { ISingleUser } from './Users';

export const SingleUser: FC<ProsType> = (props) => {
	const [editMode, setEditMode] = useState(false);
	const { idx, id, name, phone, email } = props;
	const [values, setValues] = useState<ISingleUser>({ name, phone, email });

	useEffect(() => {
		setValues({ name, phone, email });
	}, [name, phone, email]);

	const onDelete = (id: number) => {
		store.dispatch(handleDeleteSingleUser(id));
	};

	const onEdit = (id: number, payload: ISingleUser) => {
		store.dispatch(handleUpdateSingleUser(id, payload));
	};

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setValues((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleEdit = () => {
		onEdit(id, values);
		setEditMode(false);
	};

	return (
		<tr>
			<td>00{idx + 1}</td>
			<td>{id}</td>
			<td>
				{editMode ? (
					<Input
						srOnly
						type="text"
						style={{ marginBottom: 0 }}
						name="name"
						value={values.name}
						onChange={handleChange}
					/>
				) : (
					name
				)}
			</td>
			<td>
				{editMode ? (
					<Input
						srOnly
						type="text"
						style={{ marginBottom: 0 }}
						name="phone"
						value={values.phone}
						onChange={handleChange}
						onKeyDown={handleNumberOnly}
					/>
				) : (
					phone
				)}
			</td>
			<td>
				{editMode ? (
					<Input
						srOnly
						type="email"
						style={{ marginBottom: 0 }}
						name="email"
						value={values.email}
						onChange={handleChange}
						required
					/>
				) : (
					email
				)}
			</td>
			<td>
				<Link style={{ textDecoration: 'none' }} to={`${id}`}>
					View Details
				</Link>
			</td>
			<td>
				<Button
					isOutline
					variant="green"
					className={styles.action_btn}
					onClick={() => {
						editMode ? handleEdit() : setEditMode(true);
					}}
				>
					{editMode ? 'Update' : 'Edit'}
				</Button>
				<Button
					isOutline
					variant="red"
					className={styles.action_btn}
					onClick={() => {
						editMode ? setEditMode(false) : onDelete(id);
					}}
				>
					{editMode ? 'Cancel' : 'Delete'}
				</Button>
			</td>
		</tr>
	);
};

interface ProsType extends IDataType {
	idx: number;
}
