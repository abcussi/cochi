import Auth from "../components/Auth/Auth";

function LoginForm({setToken}) {
	return (
		<>
			<Auth setToken={setToken} />
		</>
	);
}

export default LoginForm;
