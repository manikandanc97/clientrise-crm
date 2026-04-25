import client from "./client";

export const loginUser = async (data: any) => {
  const response = await client.post("/auth/login", data);
  return response.data;
};

export const registerUser = async (data: any) => {
  const response = await client.post("/auth/register", data);
  return response.data;
};

export const logoutUser = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
};
