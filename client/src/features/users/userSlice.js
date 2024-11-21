import { createSlice } from "@reduxjs/toolkit";
import person1 from "../../images_data/person1.png";
import person2 from "../../images_data/person 01 (2).png";
import person3 from "../../images_data/person 01 (3).png";
import person4 from "../../images_data/person 01 (4).png";
import person5 from "../../images_data/person 01 (5).png";
import person6 from "../../images_data/person 01 (6).png";
import person7 from "../../images_data/person 01 (7).png";
import person8 from "../../images_data/person 01 (8).png";
import person9 from "../../images_data/person 01 (9).png";
import person10 from "../../images_data/person 01 (10).png";


const initialState = [
  { id: 1, image:person1, name: "Leanne Graham", email: "Sincere@april.biz", phone: "1-770-736-8031", website: "hildegard.org" },
  { id: 2, image:person2, name: "Ervin Howell", email: "Shanna@melissa.tv", phone: "010-692-6593", website: "anastasia.net" },
  { id: 3, image:person3,  name: "Leanne Graham", email: "Sincere@april.biz", phone: "1-770-736-8031", website: "hildegard.org" },
  { id: 4, image:person4, name: "Ervin Howell", email: "Shanna@melissa.tv", phone: "010-692-6593", website: "anastasia.net" },
  { id: 5, image:person5 , name: "Leanne Graham", email: "Sincere@april.biz", phone: "1-770-736-8031", website: "hildegard.org" },
  { id: 6, image:person6 , name: "Ervin Howell", email: "Shanna@melissa.tv", phone: "010-692-6593", website: "anastasia.net" },
  { id: 7, image:person7 , name: "Leanne Graham", email: "Sincere@april.biz", phone: "1-770-736-8031", website: "hildegard.org" },
  { id: 8, image:person8, name: "Ervin Howell", email: "Shanna@melissa.tv", phone: "010-692-6593", website: "anastasia.net" },
  { id: 9, image:person9, name: "Leanne Graham", email: "Sincere@april.biz", phone: "1-770-736-8031", website: "hildegard.org" },
  { id: 10, image:person10, name: "Ervin Howell", email: "Shanna@melissa.tv", phone: "010-692-6593", website: "anastasia.net" },
  { id: 11, image:person1, name: "Leanne Graham", email: "Sincere@april.biz", phone: "1-770-736-8031", website: "hildegard.org" },
  { id: 12, image:person4, name: "Ervin Howell", email: "Shanna@melissa.tv", phone: "010-692-6593", website: "anastasia.net" },
  { id: 13, image:person6, name: "Leanne Graham", email: "Sincere@april.biz", phone: "1-770-736-8031", website: "hildegard.org" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    toggleLike: (state, action) => {
        const user = state.find((user) => user.id === action.payload);
        if (user) user.liked = !user.liked;
      },
      editUser: (state, action) => {
        const { id, updatedData } = action.payload;
        const userIndex = state.findIndex((user) => user.id === id);
        if (userIndex !== -1) {
          state[userIndex] = { ...state[userIndex], ...updatedData };
        }
      },
    deleteUser: (state, action) => {
      return state.filter(user => user.id !== action.payload);
    },
  },
});

export const { toggleLike, editUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
