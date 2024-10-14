import { ServiceError } from "../service-error";

type SignInEmailPasswordInput = {
  email: string;
  password: string;
};

type SignInEmailPasswordOutput = {
  token: string;
};

export async function signInEmailPassword(
  data: SignInEmailPasswordInput
): Promise<SignInEmailPasswordOutput> {
  try {
    const response = await fetch("http://localhost:3000/api/auth/sign-in", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    if (response.ok) {
      return responseData;
    } else {
      throw new ServiceError("Error", responseData);
    }
  } catch (error) {
    throw error;
  }
}
