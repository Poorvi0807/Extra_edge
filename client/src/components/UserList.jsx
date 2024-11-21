import React from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "../features/users/userSelectors";
import UserCard from "./UserCard";

const UserList = () => {
  const users = useSelector(selectUsers);

  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
