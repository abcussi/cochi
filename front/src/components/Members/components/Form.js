import { useContext, useState } from "react";
import useToken from "../../../utils/hooks/useToken";
import { Context } from "../../../utils/store";

function FormMember() {
	const initialState = {
		firstName: "",
		lastName: "",
		address: "",
		ssn: "",
		isError: {
			firstName: "",
			lastName: "",
			address: "",
			ssn: "",
		},
	};
	const [formState, setformState] = useState(initialState);
	const { token } = useToken();
	const [state,dispatch] = useContext(Context);
	console.log(state, dispatch)

	const validSsn = new RegExp("^\\d{3}-\\d{2}-\\d{4}$");
	const formVal = (event) => {
		event.preventDefault();
		const { name, value } = event.target;
		let isError = { ...formState.isError };
		switch (name) {
			case "firstName":
				isError.firstName =
					typeof value === "string" && value.trim().length > 1
						? ""
						: "Atleast 2 characaters required";
				break;
			case "lastName":
				isError.lastName =
					typeof value === "string" && value.trim().length > 1
						? ""
						: "Atleast 2 characaters required";
				break;
			case "address":
				isError.address =
					typeof value === "string" && value.trim().length > 1
						? ""
						: "Atleast 2 characaters required";
				break;
			case "ssn":
				isError.ssn =
					typeof value === "string" && validSsn.test(value)
						? ""
						: "the format must be xxx-xx-xxxx only digits";
				break;
			default:
				break;
		}
		setformState({
			...formState,
			isError,
			[name]: value,
		});
	};

	async function postMembers(payload) {
		return fetch("http://localhost:8081/api/members", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(payload),
		})
			.then(async (data) => {
				const variable = await data.json();
				return { variable, status: data.status };
			} )
			.catch();
	}

	const handleSubmit = async (e) => {
		const { firstName, lastName, address, ssn } = formState;
		e.preventDefault();
		const test	= await postMembers({ firstName, lastName, address, ssn });
		if (test.status === 200) {
			dispatch({ type: "pushMember", payload: test.variable });
			setformState(initialState);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				First Name:
				<input type='text' name='firstName' onChange={formVal} />
			</label>
			{formState?.isError?.firstName?.length > 0 && (
				<span className='invalid-feedback'>{formState.isError.firstName}</span>
			)}
			<br />
			<label>
				Last Name:
				<input type='text' name='lastName' onChange={formVal} />
			</label>
			{formState?.isError?.lastName?.length > 0 && (
				<span className='invalid-feedback'>{formState.isError.lastName}</span>
			)}
			<br />
			<label>
				address:
				<input type='text' name='address' onChange={formVal} />
			</label>
			{formState?.isError?.address?.length > 0 && (
				<span className='invalid-feedback'>{formState.isError.address}</span>
			)}
			<br />
			<label>
				SSN:
				<input type='text' name='ssn' onChange={formVal} />
			</label>
			{formState?.isError?.ssn?.length > 0 && (
				<span className='invalid-feedback'>{formState.isError.ssn}</span>
			)}
			<br />
			<input type='reset' value='reset' />
			<input type='submit' value='Submit' />
		</form>
	);
}

export default FormMember;
