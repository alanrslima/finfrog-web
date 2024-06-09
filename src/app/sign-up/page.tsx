import Image from "next/image";
import SignUpForm from "./components/sign-up-form/sign-up-form";
import PorkCoing from "../../assets/images/pork-coin.webp";

export default function SignUp() {
  // async function onSubmit(data: any) {
  //   makeSignUp(data);
  // }

  // const onSubmit = async (formData: any) => {
  //   "use server";

  //Here need to write email sending functionality
  // };

  return (
    <div className="flex h-screen p-6 items-center">
      <aside className="hidden lg:flex w-1/3 relative overflow-hidden h-full bg-black rounded-2xl">
        <Image
          src={PorkCoing}
          alt="pork-coin-aide"
          className="h-full object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-surface dark:from-dark" />
      </aside>
      <main className="flex flex-1 justify-center">
        <SignUpForm />
      </main>
    </div>
  );
}
