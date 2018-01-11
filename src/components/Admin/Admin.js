import { getItem } from '../../lib/helpers';

export const Admin = () => {
  const users = JSON.parse(getItem('sb-users'));

  console.log(users);
}