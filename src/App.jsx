import "./App.css";
import { useState } from "react";
import { Table } from "./components/Table/Table";
import { users as initialUsers } from "./data/users";
import { SearchBar } from "./components/SearchBar/SearchBar";
function App() {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedUsers, setSelectedUsers] = useState([]);

  const filteredUsers = users.filter((user) =>
    user.name.toUpperCase().includes(search.toUpperCase()),
  );

  const handleSort = (column) => {
    if (sortOrder === "asc") {
      const sortedUsers = [...users].sort((a, b) => {
        if (column === "age") {
          return a.age - b.age;
        }
        return a[column].localeCompare(b[column]);
      });
      setUsers(sortedUsers);
      setSortOrder("desc");
    } else {
      const sortedUsers = [...users].sort((a, b) => {
        if (column === "age") {
          return b.age - a.age;
        }
        return b[column].localeCompare(a[column]);
      });
      setUsers(sortedUsers);
      setSortOrder("asc");
    }
  };

  const handleSelectedUser = (id) => {
    if (selectedUsers.includes(id)) {
      const updatedSelectedUsers = selectedUsers.filter((item) => {
        return item !== id;
      });
      setSelectedUsers(updatedSelectedUsers);
    } else {
      const updatedSelectedUsers = [...selectedUsers, id];
      setSelectedUsers(updatedSelectedUsers);
    }
  };

  const handleDeleteSelected = () => {
    const updatedUsers = users.filter((user) => {
      return !selectedUsers.includes(user.id);
    });
    setUsers(updatedUsers);
    setSelectedUsers([]);
  };

  const handleMarkComplete = () => {
    const updatedUsers = users.map((user) => {
      if (selectedUsers.includes(user.id)) {
        return {
          ...user,
          status: "Complete",
        };
      }

      return user;
    });

    setUsers(updatedUsers);
    setSelectedUsers([]);
  };

  return (
    <div className="app">
      <h1>Interactive User Table</h1>
      <SearchBar
        search={search}
        setSearch={setSearch}
        handleDeleteSelected={handleDeleteSelected}
        handleMarkComplete={handleMarkComplete}
      />
      <div className="table-wrapper">
        <Table
          users={filteredUsers}
          handleSort={handleSort}
          sortOrder={sortOrder}
          handleSelectedUser={handleSelectedUser}
          selectedUsers={selectedUsers}
        />
      </div>
    </div>
  );
}

export default App;
