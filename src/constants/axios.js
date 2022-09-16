import axios from "axios";

export const baseURL = 'https://63219fd4fd698dfa29fb76a1.mockapi.io/api'

export const client = axios.create({baseURL})

export const clientURL = {
    users: '/users',
    courses: '/courses'
}
