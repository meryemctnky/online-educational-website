import { client, clientURL } from "../constants/axios";

const loginService = async (data) => {
    try {
        const response = await client.get(clientURL.users, {params: data})
        return response;
    }
    catch (error) {
        return error.response;
    }
}

const registerService = async (data) => {
    try {
        const response = await client.post(clientURL.users, {'email': data.email, 'password':data.password})
        return response;
    }
    catch (error) {
        return error.response;
    }
}

export {
    loginService,
    registerService
}