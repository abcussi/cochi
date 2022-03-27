import PropTypes from "prop-types";
import { useState } from "react";
import { loginUser } from "../../../utils/fetch";
function FormAuth({ setToken }) {
	const state = {
		username: "",
		password: "",
	};
	const [login, setlogin] = useState(state);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const token = await loginUser(login);
		setToken(token);
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className='form-group'>
				<label htmlFor='username'>User</label>
				<input
					type='text'
					className='form-control'
					id='username'
					aria-describedby='username'
					placeholder='Enter email'
					onChange={(e) => setlogin({ ...login, username: e.target.value })}
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					className='form-control'
					id='password'
					placeholder='Password'
					onChange={(e) => setlogin({ ...login, password: e.target.value })}
				/>
			</div>
			<button type='submit' className='btn btn-primary'>
				Submit
			</button>
		</form>
	);
}

export default FormAuth;

FormAuth.propTypes = {
	setToken: PropTypes.func.isRequired,
};
