import { io } from "socket.io-client";

const URL = 'https://rego-api.onrender.com';

export const socket = io(URL)
console.log(socket)