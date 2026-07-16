import "./Table.css";
import { TableRow } from "../TableRow/TableRow";
export const Table = ({
  users,
  handleSort,
  sortOrder,
  handleSelectedUser,
  selectedUsers,
}) => {
  return (
    <div className="table-wrapper">
      <table className="user-table">
        <thead className="user-head">
          <tr className="table-head-row">
            <th className="table-header"></th>
            <th className="table-header">
              Name
              <button className="sort-btn" onClick={() => handleSort("name")}>
                {sortOrder === "asc" ? "▲" : "▼"}
              </button>
            </th>
            <th className="table-header">
              Email
              <button className="sort-btn" onClick={() => handleSort("email")}>
                {sortOrder === "asc" ? "▲" : "▼"}
              </button>
            </th>
            <th className="table-header">
              Status
              <button className="sort-btn" onClick={() => handleSort("status")}>
                {sortOrder === "asc" ? "▲" : "▼"}
              </button>
            </th>
            <th className="table-header">
              Age
              <button className="sort-btn" onClick={() => handleSort("age")}>
                {sortOrder === "asc" ? "▲" : "▼"}
              </button>
            </th>
          </tr>
        </thead>

        <tbody className="table-body">
          {users.map((data) => {
            return (
              <TableRow
                key={data.id}
                data={data}
                handleSelectedUser={handleSelectedUser}
                selectedUsers={selectedUsers}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
