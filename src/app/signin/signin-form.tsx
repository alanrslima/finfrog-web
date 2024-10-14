"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signInEmailPassword } from "../../services/auth/signin-email-password";
import { cookies } from "next/headers";
import { useActionState, useTransition } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { authenticate } from "../lib/actions";
import { useFormState } from "react-dom";
import { Cookies } from "../lib/cookies";
import { useErrorHandler } from "@/hooks/use-error-handler";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(50),
});

export function SignInForm() {
  const router = useRouter();

  // const [errorMessage, formAction, isPending] = useFormState(
  //   authenticate,
  //   undefined
  // );
  // const [errorMessage, formAction, isPending] = useActionState(
  //   authenticate,
  //   undefined
  // );

  // const { pending } = useFormStatus();
  // const [isPending, startTransition] = useTransition();
  const [errorHandler] = useErrorHandler();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await signInEmailPassword(values);
      const cookies = new Cookies();
      cookies.set("TESTE_TOKEN", response.token, 2);

      router.push("/transactions");
    } catch (error) {
      errorHandler(error);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        // action={formAction}
        className="space-y-8 max-w-[420px]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Min 8 characteres"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* {errorMessage && (
          <Alert variant="destructive">
            <ExclamationTriangleIcon className="h-4 w-4" />
            <AlertTitle className="font-bold">Ops!</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        )} */}

        <Button
          isLoading={form.formState.isSubmitting}
          className="w-full font-bold"
          type="submit"
        >
          Sign in
        </Button>
      </form>
    </Form>
  );
}
