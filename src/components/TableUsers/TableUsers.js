import { getItem } from '../../lib/helpers';

const TableUsers = () => {
  const users = JSON.parse(getItem('sb-members'));
  const tableDiv = document.createElement('div');
  tableDiv.setAttribute('class', 'table-members');

  /**
   * 
   */
  const renderTableUser = () => {
    const div = document.createElement('div');
    const tableUsers = `
      <table class="table">
        <thead class="thead-dark">
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Bicycle Color</th>
          <th scope="col">Remaining Time</th>
          <th scope="col">Banned</th>
        </thead>
      </table>
    `;

    div.innerHTML = tableUsers;

    return div;
  }

  tableDiv.appendChild(renderTableUser());

  return tableDiv;
}

export default TableUsers();