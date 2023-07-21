import axios from 'axios';

export default class NetworkService {
  instance = null;

  constructor() {
    this.instance = axios.create({
      baseURL: 'http://localhost:9090',
    });

    this.initInterceptors();
  }

  initInterceptors() {
    this.instance.interceptors.request.use((config) => {
      return {
        ...config,
        headers: {
          ...config.headers,

          // "authorization:": `Bearer ${accessToken}`
        },
      };
    });

    this.instance.interceptors.response.use(
      (response) => {
        return response.data;
      },
      async (error) => {
        // 만약에 access token 이 만료되면 이 곳으로 들어온다.

        const { config, status } = error;

        // 이 아래에서 refresh token 실행
        // status === 401
        this.instance.request({
          url: '/refresh/token',
          method: 'POST',
        });

        return Promise.reject(error);
      }
    );
  }

  get(url, config = {}) {
    return this.instance.get(url, config);
  }

  post(url, data, config = {}) {
    return this.instance.post(url, data, config);
  }

  put(url, config = {}) {
    return this.instance.put(url, data, config);
  }

  delete(url, config = {}) {
    return this.instance.delete(url, config);
  }
}
