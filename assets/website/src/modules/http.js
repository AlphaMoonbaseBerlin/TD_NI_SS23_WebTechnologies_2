
import axios from "axios";

const url = new URL( window.location.toLocaleString() );

const target = import.meta.env.MODE == "development" ? import.meta.env.VITE_TARGET || url.origin : url.origin;

const Axios = axios.create({
    baseURL :  target
});

const ws_url = new URL( target );
ws_url.protocol = "ws:"

const Websocket = new WebSocket( ws_url );

export {Axios, Websocket}
