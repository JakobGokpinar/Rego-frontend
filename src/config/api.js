import axios from "axios";

const serverURL = "https://rego-api.onrender.com";   //http://localhost:3080/              https://rego-api.onrender.com
const userApi = "user";
const fileApi = "file";

const instanceAxs = axios.create({
    baseURL: serverURL,
    withCredentials: true
})

export {userApi, fileApi, instanceAxs};