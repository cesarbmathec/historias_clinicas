import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../models";

const tokenURL = "api/token/";

export const getToken: any = createAsyncThunk(
  "user/getToken",
  async (user: User) => {
    const token = await axios.post("http://localhost:8000/" + tokenURL, user);
    return token.data;
  }
);
