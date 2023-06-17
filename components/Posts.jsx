import { useRouter } from 'next/router';

const Posts = ({ posts }) => {
  const router = useRouter();
  return posts.length > 0 ? (
    <div>
      {posts.map(({ id, title }) => (
        <div
          key={id}
          className="card"
          onClick={() => router.push(`/post/${id}`)}
        >
          {title}
        </div>
      ))}
    </div>
  ) : (
    <div className="no-result"> No posts found</div>
  );
};

export default Posts;
