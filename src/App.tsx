import { Details, Home, Login } from 'components/pages';
import { Layout } from 'components/templates';
import { AuthGuard } from 'components/templates/Auth/AuthGuard';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getUserState } from 'store/actions';

const App: FC = () => {
	const { isAuthenticate } = useSelector(getUserState);

	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="login" element={isAuthenticate ? <Navigate to={'/'} /> : <Login />} />
				<Route
					path=":id"
					element={
						<AuthGuard>
							<Details />
						</AuthGuard>
					}
				/>
				<Route path="*" element={<div>Sothik path e ashen!!</div>} />
			</Route>
		</Routes>
	);
};

export default App;

