import { io } from "socket.io-client";
// https://rego-api.onrender.com
//http://localhost:3080/

let serverLink = 'https://rego-api.onrender.com';
const socket = io(serverLink)

export default socket