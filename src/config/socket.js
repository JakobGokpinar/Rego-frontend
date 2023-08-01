import { io } from "socket.io-client";

let serverLink = 'https://rego-api.onrender.com';
const socket = io(serverLink)

export default socket