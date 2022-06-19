import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';

export const Layout: FC = () => {
	return (
		<section>
			<Header />
			<main className="container">
				<Outlet />
			</main>
		</section>
	);
};
