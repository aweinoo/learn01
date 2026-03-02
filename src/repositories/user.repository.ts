import { fetchUsers } from '../services/api.services';

export const getUsers = async () => {
return await fetchUsers();
};
