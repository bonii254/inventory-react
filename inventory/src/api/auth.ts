import { apiClient } from "../utils/apiClient";

export const loginUser = async (email: string, password: string) => {
  const response = await apiClient.post("/auth/login", { email, password });
  return response.data;
};

export const registerUser = async (
  fullname: string, email: string,
  password: string, department: string, role: string) => {
  const response = await apiClient.post(
    "/auth/register", {
      fullname, email, password, department, role });
  return response.data;
};

export const logoutUser = async () => {
  await apiClient.post("/auth/logout");
  localStorage.removeItem("token");
};

export const refreshToken = async () => {
  const response = await apiClient.post("/auth/refresh");
  return response.data;
};


export const getDepartments = async () => {
  const response = await apiClient.get("/departments");
  return response.data;
};

export const getRoles = async () => {
  const response = await apiClient.get("/roles");
  return response.data;
};
