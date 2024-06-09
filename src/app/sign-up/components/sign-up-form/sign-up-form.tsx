"use client";
import { AlertContent, Button, Headline, TextInput } from "@/components";
import { useFormState } from "react-dom";
import { FormStateProps, onSignUp } from "./sign-up-action";
import Link from "next/link";

export default function SignUpForm() {
  const [state, formAction] = useFormState<FormStateProps, FormData>(onSignUp, {
    errors: [],
  });

  return (
    <form
      method="POST"
      action={formAction}
      className="flex flex-col bg-white gap-8 p-8 rounded-3xl shadow-lg w-full md:w-[500px] dark:bg-gray-dark"
    >
      <Headline
        title="Crie sua conta"
        subTitle="Gerencie sua vida financeira, começando agora!"
        centralized
      />
      <div className="flex flex-col gap-4">
        <TextInput id="name" required name="name" label="Nome" />
        <TextInput
          id="email"
          required
          name="email"
          label="E-mail"
          type="email"
        />
        <TextInput
          id="password"
          required
          label="Senha"
          name="password"
          placeholder="6+ caracteres"
          type="password"
        />

        {state?.errors?.map((err) => (
          <AlertContent key={err.message} description={err.message} />
        ))}
      </div>
      <Button>Criar conta</Button>
      <span className="text-sm text-center">
        Já possui uma conta?{" "}
        <Link href="/sign-in" className="font-bold underline">
          Faça o login
        </Link>
      </span>
    </form>
  );
}
