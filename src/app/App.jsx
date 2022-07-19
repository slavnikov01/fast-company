import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleToggleBookMark = (id) => {
    return "fill";
  };

  return (
    <>
      <SearchStatus key={users._id} length={users.length} />
      <Users
        key={users._id}
        users={users}
        onHandleDelete={handleDelete}
        length={users.length}
        onHandleToggleBookMark={handleToggleBookMark}
      />
    </>
  );
}

export default App;
