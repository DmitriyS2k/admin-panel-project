import axios from 'axios';
export var instance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' },
});
export default instance;
//# sourceMappingURL=ConfigAxios.js.map