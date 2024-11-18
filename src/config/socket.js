import { io } from "socket.io-client";

let serverLink = "http://localhost:3000/";
const socket = io(serverLink)

export default socket