import Api from '../config/httpConfig';

export const getPosts = async () =>
  await Api.get('/posts').then(({ data }) => data);

export const getPostById = async (id) =>
  await Api.get(`/posts/${id}`).then(({ data }) => data);
