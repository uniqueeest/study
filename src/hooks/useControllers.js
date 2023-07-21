import PostController from '../controllers/PostController';

const controllers = {
  post: new PostController(),
};

export const useControllers = () => {
  return controllers;
};
