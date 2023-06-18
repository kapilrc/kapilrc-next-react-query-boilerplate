import { useRouter } from 'next/router';

const Card = ({ name, email, username }) => (
  <div className="card">
    <p>name: {name}</p>
    {email && <p>email: {email}</p>}
    {username && <p>username: {username}</p>}
  </div>
);

export default Card;

Card.defaultProps = {
  name: 'No user found',
};
