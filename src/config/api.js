import axios from "axios";

const serverURL = "http://localhost:3000/";   
const userApi = "user";
const fileApi = "file";


console.log("server url, ", serverURL);
const instanceAxs = axios.create({
    baseURL: serverURL,
    withCredentials: true
})

export {userApi, fileApi, instanceAxs};