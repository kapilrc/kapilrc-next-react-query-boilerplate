import Api from '../config/httpConfig';

export const getUsers = async () =>
  await Api.get('/users').then(({ data }) => data);

export const getUserById = async (id) =>
  await Api.get(`/users/${id}`).then(({ data }) => data);
