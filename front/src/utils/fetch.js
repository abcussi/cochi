export async function loginUser(credentials) {
	return fetch("http://localhost:8081/auth", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(credentials),
	}).then((data) => data.json());
}

export 	async function postMembers(payload, token) {
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
export 	async function getMembers(token) {
    return fetch("http://localhost:8081/api/members", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    }).then((data) => data.json(data));
}