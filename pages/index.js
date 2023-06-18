import Head from 'next/head';
import React from 'react';
import { useQuery } from 'react-query';
import { getPosts } from '../api/posts';
import { getUsers } from '../api/users';
import Posts from '../components/Posts';
import Users from '../components/Users';
import { useUser } from '../redux/hooks/useUser';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [{ users }, { setUsers }] = useUser();
  const { isLoading, error, isSuccess, data } = useQuery(['users'], getUsers, {
    staleTime: 30000,
  });

  React.useEffect(() => {
    setUsers(data);
  }, [data]);

  const renderResult = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>{error.message}</div>;
    }
    if (isSuccess) {
      return <Users users={users} />;
    }
    return <></>;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>{renderResult()}</main>

      <footer> Kapilrc Footer</footer>
    </div>
  );
}
