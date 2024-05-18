import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex my-12 justify-center items-center">
      {" "}
      <SignUp path="/sign-up" />
    </div>
  );
}
