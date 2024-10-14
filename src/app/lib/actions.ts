"use server";

import { signInEmailPassword } from "@/services/auth/signin-email-password";
import { cookies } from "next/headers";

export async function authenticate(_currentState: unknown, formData: FormData) {
  try {
    const response = await signInEmailPassword({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
    cookies().set({
      name: "FIN_TOKEN",
      value: response.token,
      httpOnly: true,
      path: "/",
    });
  } catch (error) {
    return "Invalid credentials";
  }
}
