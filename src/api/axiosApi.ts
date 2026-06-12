import axios from "axios";

const pokeApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

// TODO interceptors

// tesloApi.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export { pokeApi };
