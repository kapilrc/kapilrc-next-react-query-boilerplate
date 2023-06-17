import Head from 'next/head';
import { useQuery } from 'react-query';
import { getPosts } from '../api/posts';
import Posts from '../components/Posts';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { isLoading, error, isSuccess, data } = useQuery(['todos'], getPosts, {
    staleTime: 30000,
  });

  const renderResult = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>{error.message}</div>;
    }
    if (isSuccess) {
      return <Posts posts={data} />;
    }
    return <></>;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>{renderResult()}</main>

      <footer>Footer</footer>
    </div>
  );
}
