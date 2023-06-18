import Head from 'next/head';
import React from 'react';
import { useQuery } from 'react-query';
import { getUsers } from '../api/user.service';
import Users from '../components/Users';
import { useUser } from '../redux/hooks/useUser';
import Link from 'next/link';

export default function Home() {
  const [{ users }, { setUsers }] = useUser();
  const { isLoading, error, isSuccess, data } = useQuery(['users'], getUsers, {
    staleTime: 30000,
  });

  React.useEffect(() => {
    // an example to set data in a global state
    setUsers(data);
  }, [data]);

  const renderResult = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (error) {
      return <div>{error?.message}</div>;
    }
    if (isSuccess) {
      return <Users users={users} />;
    }
    return <></>;
  };

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        <div className="main">{renderResult()}</div>
      </main>

      <footer>
        <Link href="https://github.com/kapilrc" target="_blank">
          Kapilrc Github
        </Link>
      </footer>
    </div>
  );
}
