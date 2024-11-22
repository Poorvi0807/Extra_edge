import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLike, editUser, deleteUser } from "./features/users/userSlice";
import { FaPhoneFlip } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { IoHeartSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import './App.css'

const App = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleEditClick = (user) => {
    setIsEditing(user.id);
    setFormData(user);
  };

  const handleSaveClick = () => {
    dispatch(editUser({ id: isEditing, updatedData: formData }));
    setIsEditing(null);
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Dashboard</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
              width: "200px",
            }}
          >
          <div
            style={{
                  width: "100px",
                  height: "100px",
                  margin:"auto",
                  marginBottom: "10px"
                }}
          >
            <img
                src={user.image}
                alt={user.name}
                style={{
                  width: "100px",
                  height: "100px"
                }}
              />
          </div>
            {isEditing === user.id ? (
              <div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Name"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="Email"
                />
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Phone"
                />
                <input
                  type="text"
                  value={formData.website}
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                  placeholder="Website"
                />
                <button onClick={handleSaveClick}>Save</button>
              </div>
            ) : (
              <div>
                <h3>{user.name}</h3>
                <p ><span style={{ margin:"0",paddingBottom:"0px", background:"Pink"}}><MdOutlineMailOutline /></span><span>{user.email}</span></p>
                <p><span><FaPhoneFlip /></span><span>{user.phone}</span></p>
                <p><span><TbWorld /></span><span>{user.website}</span></p>
                <button
                  style={{
                    width: '33%',
                    border: 'none',
                    padding:'5px'
                  }}
                  onClick={() => dispatch(toggleLike(user.id))}
                >
                  {user.liked ? <IoHeartSharp 
                     style={{
                    color:  "red" ,
                  }}
                  /> : <IoHeartOutline style={{
                    color:"red",
                  }}/>}
                  
                </button>
                <button style={{
                    width: '33%',
                    border: 'none',
                    padding:'5px'
                  }} onClick={() => handleEditClick(user)}><RiEditLine /></button>
                <button style={{
                    width: '33%',
                    border: 'none',
                    padding:'5px'
                  }} onClick={() => handleDeleteClick(user.id)}><MdDelete /></button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;


