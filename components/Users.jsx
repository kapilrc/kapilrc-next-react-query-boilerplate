import { useRouter } from 'next/router';

const Users = ({ users }) => {
  const router = useRouter();
  return users?.length > 0 ? (
    <div>
      {users.map(({ id, name }) => (
        <div
          key={id}
          className="card"
          onClick={() => router.push(`/user/${id}`)} //we can use next/link . this is alternative way
        >
          {name}
        </div>
      ))}
    </div>
  ) : (
    <div className="no-result"> No users found</div>
  );
};

export default Users;
