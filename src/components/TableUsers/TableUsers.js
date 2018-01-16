import { getItem } from '../../lib/helpers';

export const TableUsers = () => {
  const users = JSON.parse(getItem('sb-users'));
  const tableDiv = document.createElement('div');
  const title = document.createElement('h2');
  tableDiv.setAttribute('class', 'table-users');
  title.innerHTML = 'Admin Area - Users';
  tableDiv.appendChild(title);

  /**
   * Returns the body table based on users
   */
  const renderBodyTable = () => {
    return `
      ${users.map(user => `
        <tr>
          <td>${user.firstName}</td>
          <td>${user.lastName}</td>
          <td>${user.mail}</td>
          <td>${user.phone}</td>
          <td></td>
          <td></td>
          <td>${user.banned}</td>
        </tr>
      `).join('')}
    `;
  }

  /**
   * Returns the table for users
   */
  const renderTableUser = () => {
    const divEle = document.createElement('div');

    const tableUsers = `
      <table class="table">
        <thead class="thead-dark">
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Bicycle Color</th>
          <th scope="col">Remaining Time</th>
          <th scope="col">Banned Status</th>
        </thead>
        <tbody>
          ${renderBodyTable()}
        </tbody>
      </table>
    `;

    divEle.innerHTML += tableUsers;

    return divEle;
  }

  tableDiv.appendChild(renderTableUser());

  return tableDiv;
}
