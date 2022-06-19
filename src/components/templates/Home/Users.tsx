import { IDataType } from 'libs/api/interfaces';
import { FC, Fragment } from 'react';
import { SingleUser } from './SingleUser';

const Users: FC<PropsType> = ({ data }) => (
	<Fragment>
		{data.length > 0 ? (
			data.map((el, i) => <SingleUser key={i} idx={i} {...el} />)
		) : (
			<tr>
				<td colSpan={100} style={{ color: 'gold' }}>
					No data found!
				</td>
			</tr>
		)}
	</Fragment>
);

export default Users;

interface PropsType {
	data: IDataType[];
}

export interface ISingleUser {
	name: string;
	phone: string;
	email: string;
}
