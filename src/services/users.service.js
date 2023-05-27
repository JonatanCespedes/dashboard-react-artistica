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