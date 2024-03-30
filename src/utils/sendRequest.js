import axios from "axios"

export const sendRequest = async (route, path) => {
    const response = await axios
    .post(`/api/v1/${route}/${path}`)

    return response;
}