import { client, clientURL } from "../constants/axios";

export const getCourseService = async () => {
    try {
        const response = await client.get(clientURL.courses)
        return response;
    }
    catch (error) {
        return error.response;
    }
}