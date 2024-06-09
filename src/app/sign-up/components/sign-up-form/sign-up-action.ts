"use server";

export type FormStateProps = {
  errors: { message: string }[];
};

export async function onSignUp(
  currentState: FormStateProps,
  formdData: FormData
): Promise<FormStateProps> {
  const email = formdData.get("email");
  const name = formdData.get("name");
  const password = formdData.get("password");
  const body = { email, password, name };
  const response = await fetch("http://localhost:3000/api/auth/sign-up", {
    body: JSON.stringify(body),
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    const data = await response.json();
    console.log("data", data);
    return data;
  }
  return { errors: [] };
}
