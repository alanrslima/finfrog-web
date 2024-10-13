import { Headline } from "@/components/atoms/headline";
import { SignInForm } from "./signin-form";

export default function Tramsactions() {
  return (
    <main className="w-dvw h-dvh flex justify-center items-center">
      <div className="flex rounded-md flex-col gap-8 bg-card p-8 min-w-[420px]">
        <Headline
          title="Sign in"
          description="Welcome back! Please enter your credentials"
        />
        <SignInForm />
      </div>
    </main>
  );
}
