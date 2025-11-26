// src/lib/axios.ts
import axios from "axios";

// ✅ Cria instância do Axios
export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10_000, // 10 segundos
});

// ✅ Intercepta requisições (útil para tokens JWT)
api.interceptors.request.use(
  (config) => {
    // Exemplo: adicionar token automaticamente
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Intercepta respostas e trata erros de forma uniforme
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("Erro de resposta:", error.response.data);
    } else if (error.request) {
      console.error("Sem resposta do servidor:", error.request);
    } else {
      console.error("Erro ao configurar requisição:", error.message);
    }
    return Promise.reject(error);
  }
);
