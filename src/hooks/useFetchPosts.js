import { useRecoilState, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { postsLoadingState, postsState } from '../stores';
import { useControllers } from './useControllers';

export const useFetchPosts = () => {
  const { post } = useControllers();

  const [isLoading, setIsLoading] = useRecoilState(postsLoadingState);
  const setPosts = useSetRecoilState(postsState);

  const fetchPosts = async () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);

    return post
      .getPosts('/posts')
      .then((posts) => {
        if (posts) {
          setPosts(posts);
          return;
        }

        return Promise.reject();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);
};
