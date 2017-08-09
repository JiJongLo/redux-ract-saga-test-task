const url = 'http://localhost:1337';

export function updateUserList(user) {
    return fetch(`${url}/users`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(resp => resp.json())
};


export function getAllUsers() {
    return fetch(`${url}/users`).then(resp => resp.json())
};


