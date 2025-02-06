import axios from "axios";

// const token: string | null = localStorage.getItem("@token:token");

export const api = axios.create({
  baseURL: "https://brasilapi.com.br/api/cep/v1",
  timeout: 20000,
  headers: {
    "Content-Type": "application/json",
  },
});
