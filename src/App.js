import { Routes, Route } from 'react-router-dom';

import EnvSpecificRouter from 'components/EnvSpecificRouter';

import { AuthUser } from 'globals/AuthUser';

import RegistrationPage from 'pages/reg';
import LoginPage from 'pages/login';
import HomePage from 'pages/main';

function App() {
	return (
		<AuthUser>
			<EnvSpecificRouter>
				<Routes>
					<Route path={'/'} element={<HomePage />} />
					<Route path={'/login'} element={<LoginPage />} />
					<Route path={'/registration'} element={<RegistrationPage />} />
				</Routes>
			</EnvSpecificRouter>
		</AuthUser>
	);
}

export default App;
