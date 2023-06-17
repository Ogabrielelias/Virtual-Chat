import { io } from 'socket.io-client';
import { obterCookie } from './utils/cookies';

let path = window.location.pathname
const URL = process.env.NODE_ENV === 'production' ? undefined : 'http://192.168.0.128:5000';


export const socket = io(`${URL+path}`, {
    auth: {
      token:obterCookie('tokenJwt')},
    autoConnect: false,
    
  });