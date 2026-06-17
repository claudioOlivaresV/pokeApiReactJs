import axios from "axios";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

const authApi = axios.create({
  baseURL: "https://dummyjson.com/auth/",
});

// TODO interceptors

// tesloApi.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export { pokeApi, authApi };
