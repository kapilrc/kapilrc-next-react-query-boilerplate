import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card';
import { useUser } from '../../redux/hooks/useUser';

export default function User() {
  const router = useRouter();
  const { id } = router.query;

  // there are better ways to in react-query to generate static paths and prefect pages
  // but this is just an example to get current state and dispatch and action to set a new state
  // a simple abstraction to get and set state in redux toolkit using a custom hook;

  const [{ currentUser }, { setCurrentUser }] = useUser();
  // instead of {currentUser} = useSelector((state) => state.user);
  // and then dispatch(setCurrentUser); complicating in the ui

  React.useEffect(() => {
    setCurrentUser(id);
  }, [router.query]);

  console.log(currentUser);

  return <Card {...currentUser} />;
}
