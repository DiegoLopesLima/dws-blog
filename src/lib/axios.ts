import axios from "axios";
import { apiBaseURL } from "@/contants/api";

export const api = axios.create({
  baseURL: apiBaseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
