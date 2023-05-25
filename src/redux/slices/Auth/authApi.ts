import { createAsyncThunk } from "@reduxjs/toolkit";
import {BASE_URL_SIGNUP} from "../../../api/ApiConfig";
import { FETCH } from "../../../api/ApiHelper";
interface userCred {
  email: string;
  password: string;
}

export const SignUpUser = createAsyncThunk(
  "Auth/SignUp",
  async ({ email, password }: userCred) => {

    let body={
      email:email,
      password:password,
      returnSecureToken:true
    }
    try {
      const response: any = await FETCH("POST", "", BASE_URL_SIGNUP, body);
      return response;
    } catch (error) {
      console.log(error);
      console.log("error");
    }
  }
);
