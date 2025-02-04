import axios from "axios";

// const token: string | null = localStorage.getItem("@token:token");

export const api = axios.create({
  baseURL: "https://viacep.com.br/ws",
  timeout: 12000,
  headers: {
    "Content-Type": "application/json",
  },
});
