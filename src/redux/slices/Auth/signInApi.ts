import { createAsyncThunk } from "@reduxjs/toolkit";
import {BASE_URL_SIGNIN} from "../../../api/ApiConfig";
import { FETCH } from "../../../api/ApiHelper";
interface userCred {
  email: string;
  password: string;
}

export const SignInUser = createAsyncThunk(
  "Auth/SignIn",
  async ({ email, password }: userCred) => {

    let body={
      email:email,
      password:password,
    }
    try {
      const response: any = await FETCH("POST", "", BASE_URL_SIGNIN, body);
      return response?.data;
    } catch (error) {
      console.log(error);
      console.log("error");
    }
  }
);
