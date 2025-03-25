import SignIn from "@/components/sign-in";
import { SignUp } from "@/components/sign-up";

export default function Home() {
  return (
    <div className="flex gap-12 items-center justify-center w-full">
      <SignIn />
      <SignUp />
    </div>
  );
}
