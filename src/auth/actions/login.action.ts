import { authApi } from "../../api/axiosApi";
import type { LoginResponse } from "../../interfaces/LoginResponse.interface";

export const loginAction = async (
  username: string,
  password: string,
): Promise<LoginResponse> => {
  try {
    const { data } = await authApi.post<LoginResponse>("/login", {
      username,
      password,
    });
    return data;
  } catch (error) {
    throw new Error("Login failed", { cause: error });
  }
};
