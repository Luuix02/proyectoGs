import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/auth/login",
});

export const loginUser = async (correo, contrasena) => {
  const response = await axios.post("http://localhost:3001/auth/login", {
    correo: correo,
    contrasena: contrasena,
  });
  console.log(response);
  return response.data;
};
export default api;
