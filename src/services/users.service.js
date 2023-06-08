const BASE_USERS_URL_API = "http://localhost:3001/api/users"

export const getUsers = async () => {
    try {
        const response = await fetch(BASE_USERS_URL_API);
        const json = await response.json();
        return json;
        
    } catch (error) {
        console.error("Error while fetching users");
        return Promise.reject("Error while fetching users");
    }
}

export const registerUser = async (data) => {
    try {
        const result = await fetch(`${BASE_USERS_URL_API}/register `, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })

        return result;
    } catch (error) {
        console.error("Error while posting users");
        return Promise.reject("Error while posting users");
    }
}

export const loginUser = async (data) => {
    try {
        const result = await fetch(`${BASE_USERS_URL_API}/login `, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })

        return result;
    } catch (error) {
        console.error("Error while posting users");
        return Promise.reject("Error while posting users");
    }
}