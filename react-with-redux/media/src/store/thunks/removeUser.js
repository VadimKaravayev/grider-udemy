import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const removeUser = createAsyncThunk("users/remove", async (user) => {
  await axios.delete(`http://127.0.0.1:3001/users/${user.id}`);
  return user;
});

export { removeUser };
