import { useContext, useEffect } from "react";
import useToken from "../../../utils/hooks/useToken";
import { Context } from "../../../utils/store";

function Membertable() {
	const [state, dispatch] = useContext(Context);
	const { token } = useToken();
	const headTable = ["FirstName", "LastName", "Address", "SSN"];
	const updateMembers = (data) => {
		dispatch({ type: "getMembers", payload: data });
	};

	async function getMembers() {
		return fetch("http://localhost:8081/api/members", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
		}).then((data) => data.json(data));
	}

	useEffect(() => {
		getMembers().then((data) => {
			updateMembers(data);
		});
	}, []);

	return (
		<table style={{ width: 500 }}>
			<thead>
				<tr>
					{headTable.map((head) => (
						<th key={head}>{head}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{state.members.map((member) => (
					<tr key={member.ssn}>
						<td>{member.firstName}</td>
						<td>{member.lastName}</td>
						<td>{member.address}</td>
						<td>{member.ssn}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Membertable;
