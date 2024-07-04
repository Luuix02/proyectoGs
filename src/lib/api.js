import axios from "axios";

const baseURL = "http://localhost:3001";

const api = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginUser = async (correo, contrasena) => {
  try {
    const response = await api.post("/auth/login", {
      correo: correo,
      contrasena: contrasena,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message || "Error al iniciar sesión");
  }
};

export const registroUser = async ({
  correo,
  contrasena,
  nombres,
  telefono,
  genero,
  identificacion,
  ficha,
}) => {
  try {
    const response = await api.post("/auth/register", {
      correo,
      contrasena,
      nombres,
      telefono,
      genero,
      identificacion,
      ficha,
    });
  } catch (error) {
    throw new Error(
      error.response.data.message || "Error al registrar usuario"
    );
  }
};

export default api;
