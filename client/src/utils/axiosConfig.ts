import axios from "axios";
import { SERVER_BASE_URL } from "./constants.ts";

export const axiosInstance = axios.create({
  baseURL: SERVER_BASE_URL,
});
