import axios from "axios";
require('dotenv').config();

const serverURL = process.env.REACT_APP_SERVER_URL;   
const userApi = "user";
const fileApi = "file";


console.log("server url, ", serverURL);
const instanceAxs = axios.create({
    baseURL: serverURL,
    withCredentials: true
})

export {userApi, fileApi, instanceAxs};