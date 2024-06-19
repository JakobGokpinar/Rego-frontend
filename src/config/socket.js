import { io } from "socket.io-client";
require('dotenv').config();

let serverLink = process.env.REACT_APP_SERVER_URL;
const socket = io(serverLink)

export default socket