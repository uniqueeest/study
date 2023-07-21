import NetworkService from '../services/NetworkService';

export default class PostController extends NetworkService {
  getPosts(url, config) {
    return this.get(url, config);
  }

  getPosts2 = () => {};
}
