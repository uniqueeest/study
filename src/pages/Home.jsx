import React from 'react';
import { useRecoilValue } from 'recoil';
import { postsState, postsLoadingState } from '../stores';
import { useFetchPosts } from '../hooks';

const Home = () => {
  const isLoading = useRecoilValue(postsLoadingState);
  const posts = useRecoilValue(postsState);

  useFetchPosts();

  if (isLoading) {
    return <h1>로딩한다!!!</h1>;
  }

  const fetchData = async () => {
    try {
      const res = await axios.get('http://localhost:9090/posts');

      setPosts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul>
      {posts.map(({ title }, i) => {
        return <li key={i.toString()}>{title}</li>;
      })}
    </ul>
  );
};

export default Home;
