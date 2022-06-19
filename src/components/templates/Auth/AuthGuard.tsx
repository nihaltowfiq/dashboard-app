import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getUserState } from 'store/actions';

export const AuthGuard: FC = ({ children }) => {
	const { isAuthenticate } = useSelector(getUserState);
	const location = useLocation();

	if (!isAuthenticate) return <Navigate replace to="/login" state={{ from: location }} />;

	return children;
};
