import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser , editUser} from "../features/users/userSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editUser(user.id));
  };

  const handleDelete = () => {
    dispatch(deleteUser(user.id));
  };

  return (
    <div className="user-card">

      <h3>{user.name}</h3>
      <img
      // src={user.img}
        src={user.image} // Display user's image
        alt={user.name}
        style={{ width: "100px", height: "100px", borderRadius: "50%", marginBottom: "10px" }}
      />
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default UserCard;
