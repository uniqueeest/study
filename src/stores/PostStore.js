import { atom } from 'recoil';

export const postsState = atom({
  key: 'postsState',
  default: [],
});

export const postsLoadingState = atom({
  key: 'postsLoadingState',
  default: false,
});
