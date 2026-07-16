import "./TableRow.css";

export const TableRow = ({ data, handleSelectedUser, selectedUsers }) => {
  return (
    <tr className="table-row">
      <td className="table-cell">
        <input
          className="row-checkbox"
          type="checkbox"
          checked={selectedUsers.includes(data.id)}
          onChange={() => handleSelectedUser(data.id)}
        />
      </td>
      <td className="table-cell">{data.name}</td>
      <td className="table-cell">{data.email}</td>
      <td className="table-cell">{data.status}</td>
      <td className="table-cell">{data.age}</td>
    </tr>
  );
};
