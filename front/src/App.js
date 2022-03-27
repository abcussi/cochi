import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import LoginForm from "./containers/Login";
import useToken from "./utils/hooks/useToken";
import 'antd/dist/antd.css';
function App() {
	const { token, setToken } = useToken();
	if (!token) {
		return <LoginForm setToken={setToken} />;
	} else
		return (
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Dashboard />} />
				</Routes>
			</BrowserRouter>
		);
}

export default App;
