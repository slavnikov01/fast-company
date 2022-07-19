import React from "react";
import User from "./user";

const Users = ({ users, onHandleDelete, onToggleBookMark }) => {
  return (
    <>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <>
                <User
                  key={user._id}
                  {...user}
                  onDelete={onHandleDelete}
                  onToggleBookMark={onToggleBookMark}
                />
              </>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Users;
